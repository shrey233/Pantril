using Microsoft.WindowsAzure.Storage.Table;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace XperCore.Model
{
    public class ShoppingListEntity : TableEntity
    {
        public ShoppingListEntity() { }

        [IgnoreProperty]
        public string UserId
        {
            get
            {
                return PartitionKey;
            }

            set
            {
                PartitionKey = value;
            }
        }

        [IgnoreProperty]
        public string ListId
        {
            get
            {
                return RowKey;
            }

            set
            {
                RowKey = value;
            }
        }

        public string Name { get; set; }

        public string ShoppingListJSON { get; set; }

        [IgnoreProperty]
        public List<string> ShoppingList
        {
            get
            {
                return !string.IsNullOrWhiteSpace(ShoppingListJSON) 
                    ? JsonConvert.DeserializeObject<List<string>>(ShoppingListJSON) 
                    : new List<string>();
            }
            set
            {
                if (value != null)
                {
                    ShoppingListJSON = JsonConvert.SerializeObject(value);
                }
            }
        }
    }
}
