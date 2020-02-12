$.ajax({
    method: 'GET',
    url: 'https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json?fbclid=IwAR2mXEkuYQIPRkvtWOWjfzTLwHAXITGOTmzna04FwjQ9klDEyNCivjDKeS4',
    data: {
    },
  }).done((resp) => {
    const res = JSON.parse(resp);
    for (let i = 0; i < res.features.length; i += 1 ) {
      if (res.features[i].properties.county === '高雄市' && res.features[i].properties.town === '岡山區' ) {
        $('.container').append(`
        <h2>
          ${res.features[i].properties.name}
        </h2>
        <p>
          大人口罩：${res.features[i].properties.mask_adult}個；
          小孩口罩：${res.features[i].properties.mask_child}個
        </p>
        </div><br/>`);
      }
    }

  })