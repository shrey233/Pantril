using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Table;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;

namespace XperCore.Store
{
    public class TableStorage
    {
        private readonly CloudTableClient _cloudTableClient;

        public TableStorage(string connectionString)
        {
            CloudStorageAccount storageAccount = CloudStorageAccount.Parse(connectionString);

            _cloudTableClient = storageAccount.CreateCloudTableClient();
        }

        public async Task<IEnumerable<T>> GetAllAsync<T>(string partitionKey = null) where T : ITableEntity, new()
        {
            TableContinuationToken token = null;
            CloudTable table = await GetTableAsync<T>();
            TableQuery<T> query = new TableQuery<T>();

            if (partitionKey != null)
            {
                query = new TableQuery<T>().Where(TableQuery.GenerateFilterCondition("PartitionKey", QueryComparisons.Equal, partitionKey));
            }

            var result = await table.ExecuteQuerySegmentedAsync(query, token);
            if (result != null)
                return result as IEnumerable<T>;
            else
                return null;
        }

        public async Task<T> GetAsync<T>(string partitionKey, string rowKey) where T : ITableEntity
        {
            // Create a retrieve operation that takes a customer entity.
            TableOperation retrieveOperation = TableOperation.Retrieve<T>(partitionKey, rowKey);

            CloudTable table = await GetTableAsync<T>();
            TableResult retrievedResult = await table.ExecuteAsync(retrieveOperation);

            // Print the phone number of the result.
            if (retrievedResult.Result != null)
            {
                return (T)retrievedResult.Result;
            }

            return default(T);
        }

        public async Task<bool> InsertAsync<T>(T item) where T : ITableEntity
        {
            CloudTable table = await GetTableAsync<T>();

            TableOperation operation = TableOperation.Insert(item);
            var result = await table.ExecuteAsync(operation);

            return result.HttpStatusCode == (int)HttpStatusCode.OK;
        }

        public async Task UpdateAsync<T>(T updatedEntity) where T : ITableEntity
        {
            CloudTable table = await GetTableAsync<T>();

            TableOperation operation = TableOperation.InsertOrReplace(updatedEntity);

            await table.ExecuteAsync(operation);
        }

        public async Task<bool> DeleteAsync<T>(T deleteEntity) where T : ITableEntity
        {
            var table = await GetTableAsync<T>();
            TableOperation deleteOperation = TableOperation.Delete(deleteEntity);

            var result = await table.ExecuteAsync(deleteOperation);

            return result.HttpStatusCode == (int)HttpStatusCode.OK;
        }

        private async Task<CloudTable> GetTableAsync<T>()
        {
            var tableName = typeof(T).Name.Replace("Entity", string.Empty).ToLower();

            CloudTable table = _cloudTableClient.GetTableReference(tableName);
            await table.CreateIfNotExistsAsync();

            return table;
        }
    }
}
