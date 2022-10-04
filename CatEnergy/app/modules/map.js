const createMap = () => {
    let center = [59.93863506417266,30.323117499999945];
    let map = new ymaps.Map('map', {
        center: center,
        zoom: 17,
    });

    let placemark = new ymaps.Placemark(center, {}, {
        iconLayout: 'default#image',
        iconImageHref: '/public/images/map/map-pin.png',
        iconImageSize: [53, 53],
        iconImageOffset: [-15, -40],
    });

    map.geoObjects.add(placemark);

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
};

export { createMap };