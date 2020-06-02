using Core.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using XperCore.Model;
using XperCore.Services;

namespace XperCore.Controllers
{
    [Authorize]
    [Route("shopping-list")]
    [ApiController]
    public class ShoppingListController : ControllerBase
    {
        private readonly ShoppingListService _shoppingListService;

        public ShoppingListController(ShoppingListService shoppingListService)
        {
            _shoppingListService = shoppingListService;
        }

        private string UserId
        {
            get
            {
                return User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier)?.Value;
            }
        }

        [HttpGet()]
        public async Task<List<Product>> Get()
        {
            return await _shoppingListService.GetProducts(null, UserId);
        }

        [HttpPut("add-item")]
        public async Task<string> AddItem(ShoppingListRequest request)
        {
            return await _shoppingListService.AddProducts(UserId, new List<string> { request.ProductId }, request.ListId);
        }

        [HttpPost("create")]
        public async Task<string> Create(ShoppingListRequest request)
        {
            if (request.Override)
            {
                await _shoppingListService.ClearList(UserId, request.ListId);
            }

            return await _shoppingListService.AddProducts(UserId, request.ProductIds, request.ListId);
        }

        [HttpDelete("clear")]
        public async Task Clear(ShoppingListRequest request)
        {
            await _shoppingListService.ClearList(UserId, request.ListId);
        }

        [HttpDelete("delete-item")]
        public async Task DeleteItem(ShoppingListRequest request)
        {
            await _shoppingListService.RemoveProduct(UserId, request.ProductId, request.ListId);
        }
    }
}