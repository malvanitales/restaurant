var data = [
    { "image": "customer_views/cv_1.jpg" },
    { "image": "customer_views/cv_2.jpg" },
    { "image": "customer_views/cv_3.jpg" },
    { "image": "customer_views/cv_4.jpg" },
    { "image": "customer_views/cv_5.jpg" },
    { "image": "customer_views/cv_6.jpg" },
    { "image": "customer_views/cv_7.jpg" },
    { "image": "customer_views/cv_8.jpg" },
    { "image": "customer_views/cv_9.jpg" },
    { "image": "customer_views/cv_10.jpg" },
    { "image": "customer_views/cv_11.jpg" },
    { "image": "customer_views/cv_12.jpg" },
    { "image": "customer_views/cv_13.jpg" },
    { "image": "customer_views/cv_14.jpg" },
    { "image": "customer_views/cv_15.jpg" },
    { "image": "customer_views/cv_16.jpg" },
    { "image": "customer_views/cv_17.jpg" },
    { "image": "customer_views/cv_18.jpg" },
    { "image": "customer_views/cv_19.jpg" },
    { "image": "customer_views/cv_20.jpg" },
    { "image": "recipes/FB_IMG_1735561594744.jpg" },
    { "image": "recipes/FB_IMG_1735561599289.jpg" },
    { "image": "recipes/FB_IMG_1735561602651.jpg" },
    { "image": "recipes/FB_IMG_1735561634453.jpg" },
    { "image": "recipes/FB_IMG_1735561636927.jpg" },
    { "image": "recipes/FB_IMG_1735561648325.jpg" },
    { "image": "recipes/FB_IMG_1735561650514.jpg" },
    { "image": "recipes/FB_IMG_1735561653395.jpg" },
    { "image": "recipes/FB_IMG_1735561655792.jpg" },
    { "image": "recipes/FB_IMG_1735561663858.jpg" },
    { "image": "recipes/FB_IMG_1735561668853.jpg" },
    { "image": "recipes/FB_IMG_1735561673231.jpg" },
    { "image": "recipes/FB_IMG_1735561675972.jpg" },
    { "image": "recipes/FB_IMG_1735561680253.jpg" },
    { "image": "recipes/FB_IMG_1735561683670.jpg" },
    { "image": "recipes/FB_IMG_1735561685164.jpg" },
    { "image": "recipes/FB_IMG_1735561688420.jpg" },
    { "image": "recipes/FB_IMG_1735561697880.jpg" },
    { "image": "recipes/FB_IMG_1735561724415.jpg" },
    { "image": "recipes/FB_IMG_1735561731819.jpg" },
    { "image": "recipes/FB_IMG_1735561733952.jpg" },
    { "image": "recipes/FB_IMG_1735561741618.jpg" },
    { "image": "recipes/FB_IMG_1735561747228.jpg" },
    { "image": "recipes/FB_IMG_1735561749604.jpg" },
    { "image": "recipes/FB_IMG_1735561754032.jpg" },
    { "image": "recipes/FB_IMG_1735561756074.jpg" },
    { "image": "recipes/FB_IMG_1735561758961.jpg" },
    { "image": "recipes/FB_IMG_1735561761120.jpg" },
    { "image": "recipes/FB_IMG_1735561763196.jpg" },
    { "image": "recipes/FB_IMG_1735561765651.jpg" },
    { "image": "recipes/FB_IMG_1735561767643.jpg" },
    { "image": "recipes/FB_IMG_1735561770860.jpg" },
    { "image": "recipes/FB_IMG_1735561785129.jpg" },
    { "image": "recipes/FB_IMG_1735561788684.jpg" },
    { "image": "recipes/FB_IMG_1735561791254.jpg" },
    { "image": "recipes/FB_IMG_1735561793233.jpg" },
    { "image": "recipes/FB_IMG_1735561795176.jpg" },
    { "image": "recipes/FB_IMG_1735561797282.jpg" },
    { "image": "recipes/FB_IMG_1735561802297.jpg" },
    { "image": "recipes/FB_IMG_1735561805576.jpg" },
    { "image": "recipes/FB_IMG_1735561807749.jpg" },
    { "image": "recipes/FB_IMG_1735561813027.jpg" },
    { "image": "recipes/FB_IMG_1735561850928.jpg" },
    { "image": "recipes/FB_IMG_1735561852855.jpg" },
    { "image": "recipes/FB_IMG_1735561854700.jpg" },
    { "image": "recipes/FB_IMG_1735561862098.jpg" },
    { "image": "recipes/FB_IMG_1735561864255.jpg" },
    { "image": "recipes/FB_IMG_1735561866030.jpg" },
    { "image": "recipes/FB_IMG_1735561868589.jpg" },
    { "image": "recipes/FB_IMG_1735561870859.jpg" },
    { "image": "recipes/IMG-20241230-WA0011.jpg" },
    { "image": "recipes/IMG-20241230-WA0012.jpg" },
    { "image": "recipes/IMG-20241230-WA0016.jpg" },
    { "image": "recipes/IMG-20241230-WA0017.jpg" },
    { "image": "recipes/IMG-20241230-WA0018.jpg" },
    { "image": "recipes/IMG-20241230-WA0019.jpg" },
    { "image": "recipes/IMG-20241230-WA0020.jpg" },
    { "image": "recipes/IMG-20241230-WA0021.jpg" },
    { "image": "recipes/IMG-20241230-WA0022.jpg" },
    { "image": "recipes/IMG-20241230-WA0023.jpg" },
    { "image": "recipes/IMG-20241230-WA0024.jpg" },
    { "image": "recipes/IMG-20241230-WA0025.jpg" },
    { "image": "recipes/IMG-20241230-WA0026.jpg" },
    { "image": "recipes/IMG-20241230-WA0027.jpg" },
    { "image": "recipes/IMG-20241230-WA0028.jpg" },
    { "image": "recipes/IMG-20241230-WA0029.jpg" },
    { "image": "recipes/IMG-20241230-WA0032.jpg" },
    { "image": "recipes/IMG-20241230-WA0033.jpg" },
    { "image": "recipes/IMG-20241230-WA0034.jpg" },
    { "image": "recipes/IMG-20241230-WA0035.jpg" },
    { "image": "recipes/IMG-20241230-WA0036.jpg" }


];


const itemsPerPage = 12;
let currentPage = 1;
let currentFilter = 'all';


// Function to display the gallery
function displayGallery(page) {
    const filteredItems = data;
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    //const paginatedItems = filteredItems.slice(start, end);

    const paginatedItems = data;


    const galleryContainer = $('#' + currentFilter + '_container');
    galleryContainer.empty();

    paginatedItems.forEach(item => {
        galleryContainer.append(`
        <div class="col-md-4 mb-2 mt-2" data-aos="fade-up" data-aos-delay="150"> 
                <img src="assets/img/${item.image}" style="height:250px!important;object-fit:fill;" class="glightbox img-fluid w-100 h-100 shadow"/>
            
        </div>


      `);
    });

}


// Function to change the current page
function changePage(page) {
    currentPage = page;
    displayGallery(page);
}



// Initial display
displayGallery(currentPage);