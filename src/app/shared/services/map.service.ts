import {Injectable} from '@angular/core';

declare let BMap: any;

@Injectable()
export class MapService {
    constructor() {
    }

    addMarker(point: any, map: any) {
        const marker = new BMap.Marker(point);
        const opts = {
            width: 200,     // 信息窗口宽度
            height: 100,     // 信息窗口高度
            title: '信息窗口', // 信息窗口标题
        };

        map.addOverlay(marker);
        const infoWindow = new BMap.InfoWindow('黎明就在眼前', opts);
        marker.addEventListener('click', function () {
            map.openInfoWindow(infoWindow, point); // 开启信息窗口
        });
    }
}
