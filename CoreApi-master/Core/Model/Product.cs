using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Core.Model
{
    public class Product
    {       
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string ID { get; set; }
        
        [BsonElement("StockCode")]
        public int StockCode { get; set; }

        [BsonElement("CupString")]
        public string CupString { get; set; }

        [BsonElement("SmallImageFile")]
        public string SmallImageFile { get; set; }

        [BsonElement("MediumImageFile")]
        public string MediumImageFile { get; set; }

        [BsonElement("LargeImageFile")]
        public string LargeImageFile { get; set; }

        [BsonElement("URLFriendlyName")]
        public string URLFriendlyName { get; set; }

        [BsonElement("Price")]
        [DataType(DataType.Currency)]
        public double Price { get; set; }

        [BsonElement("Name")]
        public string Name { get; set; }

        [BsonElement("Description")]
        public string Description { get; set; }

        [BsonElement("Category")]
        public string Category { get; set; }

        [BsonElement("Ingredients")]
        public string Ingredients { get; set; }

        [BsonElement("NutritionalInformation")]
        public dynamic NutritionalInformation { get; set; }

        [BsonElement("AllergenContains")]
        public List<string> AllergenContains { get; set; }

        [BsonElement("AllergenMayBePresent")]
        public List<string> AllergenMayBePresent { get; set; }

        [BsonElement("AllergyStatement")]
        public string AllergyStatement { get; set; }

        public string StoreID { get; set; }

        public string Department { get; set; }

        public int __v { get; set; }

        public BsonDateTime LastUpdated { get; set; }

        public bool IsActive { get; set; }

        public string CountryOfOrigin { get; set; }

        [BsonElement("InstorePrice")]
        [DataType(DataType.Currency)]
        public double InstorePrice { get; set; }

        [BsonElement("WasPrice")]
        [DataType(DataType.Currency)]
        public double WasPrice { get; set; }

        [BsonElement("InstoreWasPrice")]
        [DataType(DataType.Currency)]
        public double InstoreWasPrice { get; set; }

        [BsonElement("IsOnSpecial")]
        public string IsOnSpecial { get; set; }

        [BsonElement("InstoreIsOnSpecial")]
        public string InstoreIsOnSpecial { get; set; }

        [BsonElement("Brand")]
        public string Brand { get; set; }

        [BsonElement("ProductWarnings")]
        public string ProductWarnings { get; set; }

        [BsonElement("DetailsImagePaths")]
        public object DetailsImagePaths { get; set; }

        public string CountryOfOriginImagePng { get; set; }

        public string CountryOfOriginImageSvg { get; set; }

        public string CountryOfOriginText { get; set; }

        public BsonDateTime InitialDateScraped { get; set; }

        [BsonElement("Directions")]
        public string Directions { get; set; }

        public bool? IsKosher { get; set; }

        public bool? IsVegan { get; set; }

        public bool? IsVegetarian { get; set; }

        public bool? IsOrganic { get; set; }

        public bool? LowSalt { get; set; }

        public bool? LowSugar { get; set; }
    }
}
