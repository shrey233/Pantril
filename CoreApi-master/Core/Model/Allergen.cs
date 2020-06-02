using Humanizer;
using System.Collections.Generic;
using System.Linq;

namespace XperCore.Model
{
    public class Allergen
    {
        public string Name { get; set; }

        public List<string> Variations { get; set; }

        public List<string> AllVariations
        {
            get
            {
                var all = new List<string>() { Name };
                all.AddRange(Variations);

                var plural = Variations.Select(v => v.Pluralize()).ToList();
                all.AddRange(plural);

                return all;
            }
        }
    }
}
