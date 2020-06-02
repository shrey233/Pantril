using Core.Model;
using System.Collections.Generic;

namespace XperCore.Model
{
    public class ProductsResponse
    {
        public ProductsResponse(List<Product> products, int totalCount)
        {
            Products = products;
            TotalCount = totalCount;
        }

        public List<Product> Products { get; private set; }

        public int TotalCount { get; private set; }

        public int FilteredCount
        {
            get
            {
                return Products.Count;
            }
        }
    }
}