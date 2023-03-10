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
        // console.log(data);
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
                        <label onclick="aiDetails('${data.id}')" for="my-modal-5" class="btn hover:bg-[#ffdddd] bg-white border-none">
                            <i class="fa-solid fa-arrow-right text-[#EB5757]"></i>
                        </label>
                    </div>  
                </div>
            </div>
        </div>
        `;
        cardContainer.appendChild(cardDiv);
    });
}

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
    document.getElementById('modal-info').innerHTML = " ";
    const mainDiv = document.createElement('div')
    mainDiv.innerHTML = `
        <div class="flex gap-5">
            <div class="bg-[#ffdddd] rounded-lg p-8 border-[#EB5757] border-2">
                <h1 class="text-xl font-bold pb-2">${info.description}</h1>
                <div class="flex gap-4 py-6">
                    <div class="bg-white p-6 font-semibold text-center rounded-lg text-[#03A30A]">
                        <div class="my-auto h-full">
                            <p>${info.pricing ? info.pricing[0].price : "no data"}</p>
                            <p>${info.pricing ? info.pricing[0].plan : "no data"}</p>
                        </div>
                    </div>
                    <div class="bg-white p-6 font-semibold text-center rounded-lg text-[#F28927]">
                        <div class="my-auto h-full">
                            <p>${info.pricing ? info.pricing[1].price : "no data"}</p>
                            <p>${info.pricing ? info.pricing[1].plan : "no data"}</p>
                        </div>
                    </div>
                    <div class="bg-white p-6 font-semibold text-center rounded-lg text-[#EB5757]">
                        <div class="my-auto h-full">
                            <p>${info.pricing ? info.pricing[2].price : "no data"}</p>
                            <p>${info.pricing ? info.pricing[2].plan : "no data"}</p>
                        </div>
                    </div>
                </div>
                <div class="flex justify-between gap-8">
                    <div>
                        <h1 class="text-xl font-bold pb-2">Features</h1>
                        <ul class="list-disc ml-4">
                            <li>${info.features ? info.features[1].feature_name : "no data"}</li>
                            <li>${info.features ? info.features[2].feature_name : "no data"}</li>
                            <li>${info.features ? info.features[3].feature_name : "no data"}</li>
                        </ul>
                    </div>
                    <div>
                        <h1 class="text-xl font-bold pb-2">Integration</h1>
                        <ul class="list-disc ml-4">
                            <li>${info.integrations ? info.integrations[0] : "no data"}</li>
                            <li>${info.integrations ? info.integrations[1] : "no data"}</li>
                            <li>${info.integrations ? info.integrations[2] : "no data"}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="rounded-lg p-8 border-gray-200 border-2">
                <figure><img class="rounded-lg" src="${info.image_link ? info.image_link[0] : "no data"}" alt="" /></figure>
                <div class="py-8 text-center">
                    <h1 class="text-xl font-bold pb-2">${info.input_output_examples ? info.input_output_examples[0].input : "no data"}</h1>
                    <p>${info.input_output_examples ? info.input_output_examples[0].output : "no data"}</p>
                </div>
            </div>
        </div>
        `;
        document.getElementById('modal-info').appendChild(mainDiv);
}
loadAi();