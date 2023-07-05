// const { error } = require("console");

const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCYcdw2wL6W6iGBKZgGK_Hjw&part=snippet%2Cid&order=date&maxResults=9';

const content = null || document.getElementById("content")

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'dae2c3bd75msh361076d828e1978p10bbd0jsn2bad942986d1',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlAPI){
    const response = await fetch(urlAPI,options)
    const data = await response.json()
    return data
}

 


(async () => {
    try{
        const videos = await fetchData(url)
        let view = `
        ${
            videos.items.map(video => 
                `
                <div class="group relative">
          <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0"></span>
              ${video.snippet.title}
            </h3>
          </div>
        </div>
      </div>
      `
    ).slice(0,4).join("")}
            `
            console.log(view)
        content.innerHTML = view

    }
    catch(error){
      alert("La aplicacion a tenido un error, por favor notifique o intente mas tarde!")
      console.log(error)
    }
})() 


// const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCw05fUBPwmpu-ehXFMqfdMw&part=snippet%2Cid&order=date&maxResults=9';

// const content = null || document.getElementById('content');

// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
//     'X-RapidAPI-Key': 'c68edbdba9mshc3cb6eb8038f3b2p1f444ajsna5de19fe1256'
//   }
// };

// async function fetchData(urlApi) {
//   const response = await fetch(urlApi, options);
//   const data = await response.json();
//   return data;
// }

// (async () => {
//   try {
//     const videos = await fetchData(API);
//     let view = `
//     ${videos.items.map(video => `
//       <div class="group relative">
//         <div
//           class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
//           <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
//         </div>
//         <div class="mt-4 flex justify-between">
//           <h3 class="text-sm text-gray-700">
//             <span aria-hidden="true" class="absolute inset-0"></span>
//             ${video.snippet.title}
//           </h3>
//         </div>
//       </div>
//     `).slice(0, 4).join('')}
//     `;
//     content.innerHTML = view;
//   } catch (error) {
//     console.log(error);
//   }
// })();