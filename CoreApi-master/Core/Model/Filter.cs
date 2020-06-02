using System.Collections.Generic;

namespace XperCore.Model
{
    public class Filter
    {
        public List<string> Allergens { get; set; }

        public bool MayContain { get; set; }

        public List<string> Lifestyle { get; set; }
    }
}
