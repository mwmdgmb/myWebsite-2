const MOVIE_DATA = [
    {
        id:1 ,
        name:"Shiraz" ,
        Years:1994 ,
        description:"Shiraz is the fifth-most-populous city of Iran and the capital of Fars Province also known as Pars and Persis ,[4]. At the 2016 census, the population of the city was 1,869,001 and its built-up area with \"Shahr-e Jadid-e Sadra\" (Sadra New Town) was home to 1,565,572 inhabitants.[5] Shiraz is located in the southwest of Iran on the \"Rudkhaneye Khoshk\" (The Dry River) seasonal river. It has a moderate climate and has been a regional trade center for over a thousand years. Shiraz is one of the oldest cities of ancient Persia.\n" +
            "Shiraz is known as the city of poets, literature, wine (despite Iran being an Islamic republic since 1979), and flowers.[7][8] It is also considered by many Iranians to be the city of gardens, due to the many gardens and fruit trees that can be seen in the city, for example Eram Garden. Shiraz has had major Jewish and Christian communities. The crafts of Shiraz consist of inlaid mosaic work of triangular design; silver-ware; pile carpet-weaving and weaving of kilim, called gilim and jajim in the villages and among the tribes.[9] In Shiraz industries such as cement production, sugar, fertilizers, textile products, wood products, metalwork and rugs dominate.[citation needed] Shirāz also has a major oil refinery and is also a major center for Iran's electronic industries: 53% of Iran's electronic investment has been centered in Shiraz.[10] Shiraz is home to Iran's first solar power plant.[11] Recently the city's first wind turbine has been installed above Babakuhi mountain near the city." ,
        ratting:4.8 ,
        genre: "drama" ,
        image:"https://www.chistamedia.com/wp-content/uploads/2019/03/torists-destination-4-700x400.jpg",
        price:"1.966"
    },
    {
        id:2 ,
        name:"no_name" ,
        Years:1994 ,
        description:"this is Description" ,
        ratting:4.3 ,
        genre: "action" ,
        image:"https://www.edisongroup.com/wp-content/uploads/2019/10/daniel-olah-E-gmKpeD2dk-unsplash-2-700x400.jpg",
        price:"5.06"
    },
    {
        id:3 ,
        name:"No_Name" ,
        Years:1994 ,
        description:"this is Description" ,
        ratting:3.1 ,
        genre: "fantasy" ,
        image:"https://makeawebsitehub.com/wp-content/uploads/2014/12/DSC08407-wpcf_700x400.jpg",
        price:"2.315"
    },
];


export const getMovies = ()=>{
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            resolve(MOVIE_DATA);
            // reject("Connot fetch data !!!")
        },2000)
    })
};