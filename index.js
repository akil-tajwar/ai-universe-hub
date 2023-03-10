const loadAi = async () => {
    const url = 'https://openapi.programming-hero.com/api/ai/tools'
    try {
        const res = await fetch(url);
        const datas = await res.json();
        displayAi(datas.data);
    }
    catch (error) {
        console.log(error);
    }
}

const displayAi = (datas) => {
    const cardContainer = document.getElementById('card-container');
    datas.tools.forEach(data => {
        console.log(data);
        const cardDiv = document.createElement('div');
        cardDiv.innerHTML = `
        <div class="card card-compact w-auto h-full bg-base-100 border-gray-200 border-2">
            <figure><img src="${data.image}" alt="" /></figure>
            <div class="card-body">
                <h1 class="text-xl font-semibold">Features</h1>
                <ol class="list-decimal ml-4 mb-2">
                    <li>${data.features[0]}</li>
                    <li>${data.features[1]}</li>
                    <li>${data.features[2]}</li>
                </ol><hr>
                <div class="card-actions flex justify-between mt-2">
                    <div>
                        <h1 class="text-xl font-semibold pb-2">${data.name}</h1>
                        <div class="flex gap-2">
                            <i class="fa-regular fa-calendar-check my-auto"></i>
                            <p>${data.published_in}</p>
                        </div>
                    </div>
                    <div class="my-auto">
                        <label for="my-modal-5" class="btn hover:bg-[#ffdddd] bg-white border-none">
                            <i onclick="aiDetails('${data.id}')" class="fa-solid fa-arrow-right text-[#EB5757]"></i>
                        </label>
                    </div>  
                </div>
            </div>
        </div>
        `;
        cardContainer.appendChild(cardDiv);
    });
}
loadAi();

const aiDetails = async (id) => {
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        modalDetails(data.data);
        // console.log(data.data);
    }
    catch (error) {
        console.log(error);
    }
}
const modalDetails = (info) => {
    console.log(info);
    document.getElementById('modal-info').innerHTML = `
        <h1 class="text-xl font-semibold pb-2">${info.description}</h1>
        <figure><img src="${info.image_link[0]}" alt="" /></figure>
        `;
}
aiDetails();