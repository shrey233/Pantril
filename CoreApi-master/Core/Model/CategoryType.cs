using System.ComponentModel;

namespace XperCore.Model
{
    public enum CategoryType
    {
        [Description("fruit & vegetables")]
        FruitVegetables,

        [Description("meat")]
        Meat,

        [Description("seafood")]
        Seafood,

        [Description("biscuits & snacks")]
        BiscuitsSnacks,

        [Description("health foods")]
        HealthFoods,

        [Description("condiments")]
        Condiments,

        [Description("international food")]
        InternationalFood,

        [Description("rice, noodles & pasta")]
        RiceNoodlesPasta,

        [Description("baking")]
        Baking,

        [Description("frozen food")]
        FrozenFood,

        [Description("canned & packet food")]
        CannedPacketFood,

        [Description("breakfast foods")]
        BreakfastFoods,

        [Description("dairy")]
        Dairy,

        [Description("cooking, seasoning & gravy")]
        CookingSeasoningGravy,

        [Description("bakery")]
        Bakery,

        [Description("chilled")]
        Chilled,

        [Description("serviced deli")]
        ServicedDeli,

        [Description("jams & spreads")]
        JamsSpreads,

        [Description("confectionery")]
        Confectionery,

        [Description("desserts")]
        Desserts,

        [Description("drinks")]
        Drinks,
    }
}
