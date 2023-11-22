function Searchbar(){
    return(
        <>
            <input type="text" id="search-bar" aria-describedby="helper-text-explanation" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-orange-100
                dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500
                dark:focus:border-blue-500 mt-2 " placeholder="Search Restaurant or Food">   
            </input>
     </>
    );
};

export default Searchbar;