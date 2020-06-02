using Core.Model;
using Core.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using XperCore.Model;
using XperCore.Store;

namespace XperCore.Services
{
    public class ShoppingListService
    {
        private static TableStorage _tableStorage;
        private readonly ProductService _productService;

        public ShoppingListService(TableStorage tableStorage, ProductService productService)
        {
            _tableStorage = tableStorage;
            _productService = productService;
        }

        public async Task<List<Product>> GetProducts(string listId, string authId)
        {
            ShoppingListEntity shoppingList;
            if (listId != null)
            {
                shoppingList = await _tableStorage.GetAsync<ShoppingListEntity>(authId, listId);
            }
            else
            {
                var shoppingLists = await _tableStorage.GetAllAsync<ShoppingListEntity>(authId);
                shoppingList = shoppingLists.FirstOrDefault();
            }

            if (shoppingList != null)
            {
                return await _productService.Get(shoppingList.ShoppingList);
            }

            return null;
        }

        public async Task<string> AddProducts(string authId, List<string> productIds, string listId = null)
        {
            ShoppingListEntity shoppingList;

            if (listId == null)
            {
                shoppingList = await GetDefaultShoppingList(authId);
                if (shoppingList == null)
                {
                    return await CreateList(authId, productIds);
                }
            }
            else
            {
                shoppingList = await _tableStorage.GetAsync<ShoppingListEntity>(authId, listId);
                if (shoppingList == null)
                {
                    return await CreateList(authId, productIds);
                }
            }

            var list = shoppingList.ShoppingList;

            foreach (var productId in productIds)
            {
                if (!list.Contains(productId))
                {
                    list.Add(productId);
                }
            }

            shoppingList.ShoppingList = list;

            await _tableStorage.UpdateAsync(shoppingList);

            return listId;
        }

        public async Task RemoveProduct(string authId, string productId, string listId = null)
        {
            ShoppingListEntity shoppingList;

            if (listId == null)
            {
                shoppingList = await GetDefaultShoppingList(authId);
            }
            else
            {
                shoppingList = await _tableStorage.GetAsync<ShoppingListEntity>(authId, listId);
            }

            if (shoppingList != null)
            {
                var list = shoppingList.ShoppingList;
                list.Remove(productId);
                shoppingList.ShoppingList = list;

                await _tableStorage.UpdateAsync(shoppingList);
            }
        }

        public async Task ClearList(string authId, string listId = null)
        {
            ShoppingListEntity shoppingList;

            if (listId == null)
            {
                shoppingList = await GetDefaultShoppingList(authId);
            }
            else
            {
                shoppingList = await _tableStorage.GetAsync<ShoppingListEntity>(authId, listId);
            }

            if (shoppingList != null)
            {
                var list = shoppingList.ShoppingList;
                list.Clear();
                shoppingList.ShoppingList = list;

                await _tableStorage.UpdateAsync(shoppingList);
            }
        }

        private async Task<string> CreateList(string authId, List<string> productIds)
        {
            string newListId = Guid.NewGuid().ToString();

            await _tableStorage.InsertAsync(new ShoppingListEntity
            {
                UserId = authId,
                ListId = newListId,
                Name = "Default",
                ShoppingList = productIds
            });

            return newListId;
        }

        private async Task<ShoppingListEntity> GetDefaultShoppingList(string authId)
        {
            var shoppingLists = await _tableStorage.GetAllAsync<ShoppingListEntity>(authId);
            return shoppingLists.FirstOrDefault();
        }
    }
}
