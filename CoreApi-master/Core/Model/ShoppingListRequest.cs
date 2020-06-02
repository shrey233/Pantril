using System.Collections.Generic;

namespace XperCore.Model
{
    public class ShoppingListRequest
    {
        public List<string> ProductIds { get; set; }

        public string ProductId { get; set; }

        public string ListId { get; set; }

        public bool Override { get; set; }
    }
}
