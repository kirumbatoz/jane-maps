const appConfig = {
  carto_user: 'cpp',
  carto_domain: 'cartoprod.capitalplanning.nyc',
};

export const mapLayers = {
  bus_stops: {
    type: 'circle',
    sourceLayer: 'layer0',
    minzoom: 12,
    paint: {
      'circle-color': 'rgba(66, 182, 244, 1)',
      'circle-opacity': 0.7,
      'circle-radius': {
        stops: [
          [
            12,
            2,
          ],
          [
            16,
            5,
          ],
        ],
      },
      'circle-stroke-width': 0,
      'circle-pitch-scale': 'map',
    },
  },
  subway_green: {
    type: 'line',
    filter: [
      'all',
      [
        '==',
        'rt_symbol',
        '4',
      ],
    ],
    paint: {
      'line-color': 'rgba(0, 147, 60, 1)',
      'line-width': {
        stops: [
          [
            10,
            1,
          ],
          [
            15,
            4,
          ],
        ],
      },
    },
  },
  subway_yellow: {
    type: 'line',
    filter: [
      'all',
      [
        '==',
        'rt_symbol',
        'N',
      ],
    ],
    paint: {
      'line-color': 'rgba(252, 204, 10, 1)',
      'line-width': {
        stops: [
          [
            10,
            1,
          ],
          [
            15,
            4,
          ],
        ],
      },
    },
  },
  subway_gray: {
    type: 'line',
    filter: [
      'all',
      [
        '==',
        'rt_symbol',
        'L',
      ],
    ],
    paint: {
      'line-color': 'rgba(167, 169, 172, 1)',
      'line-width': {
        stops: [
          [
            10,
            1,
          ],
          [
            15,
            4,
          ],
        ],
      },
    },
  },
  subway_brown: {
    type: 'line',
    filter: [
      'all',
      [
        '==',
        'rt_symbol',
        'J',
      ],
    ],
    paint: {
      'line-color': 'rgba(153, 102, 51, 1)',
      'line-width': {
        stops: [
          [
            10,
            1,
          ],
          [
            15,
            4,
          ],
        ],
      },
    },
  },
  subway_light_green: {
    type: 'line',
    filter: [
      'all',
      [
        '==',
        'rt_symbol',
        'G',
      ],
    ],
    paint: {
      'line-color': 'rgba(108, 190, 69, 1)',
      'line-width': {
        stops: [
          [
            10,
            1,
          ],
          [
            15,
            4,
          ],
        ],
      },
    },
  },
  subway_orange: {
    type: 'line',
    filter: [
      'all',
      [
        '==',
        'rt_symbol',
        'B',
      ],
    ],
    paint: {
      'line-color': 'rgba(255, 99, 25, 1)',
      'line-width': {
        stops: [
          [
            10,
            1,
          ],
          [
            15,
            4,
          ],
        ],
      },
    },
  },
  subway_blue: {
    type: 'line',
    filter: [
      'any',
      [
        '==',
        'rt_symbol',
        'A',
      ],
      [
        '==',
        'rt_symbol',
        'SI',
      ],
    ],
    paint: {
      'line-color': 'rgba(0, 57, 166, 1)',
      'line-width': {
        stops: [
          [
            10,
            1,
          ],
          [
            15,
            4,
          ],
        ],
      },
    },
  },
  subway_purple: {
    type: 'line',
    filter: [
      'all',
      [
        '==',
        'rt_symbol',
        '7',
      ],
    ],
    paint: {
      'line-color': 'rgba(185, 51, 173, 1)',
      'line-width': {
        stops: [
          [
            10,
            1,
          ],
          [
            15,
            4,
          ],
        ],
      },
    },
  },
  subway_red: {
    type: 'line',
    filter: [
      'all',
      [
        '==',
        'rt_symbol',
        '1',
      ],
    ],
    paint: {
      'line-color': 'rgba(238, 53, 46, 1)',
      'line-width': {
        stops: [
          [
            10,
            1,
          ],
          [
            15,
            4,
          ],
        ],
      },
    },
  },
  subway_stations: {
    type: 'circle',
    minzoom: 12,
    paint: {
      'circle-color': 'rgba(255, 255, 255, 1)',
      'circle-opacity': 1,
      'circle-radius': {
        stops: [
          [
            10,
            2,
          ],
          [
            14,
            5,
          ],
        ],
      },
      'circle-stroke-width': 1,
      'circle-pitch-scale': 'map',
    },
  },
  subway_stations_labels: {
    type: 'symbol',
    minzoom: 14,
    layout: {
      'text-field': '{name}',
      'symbol-placement': 'point',
      'symbol-spacing': 250,
      'symbol-avoid-edges': false,
      'text-size': 14,
      'text-anchor': 'center',
    },
    paint: {
      'text-halo-color': 'rgba(255, 255, 255, 1)',
      'text-halo-width': 1,
      'text-translate': [
        1,
        20,
      ],
    },
  },
  path_routes: {
    type: 'line',
    paint: {
      'line-color': {
        property: 'color',
        type: 'identity',
      },
      'line-width': {
        stops: [
          [
            10,
            1,
          ],
          [
            15,
            4,
          ],
        ],
      },
    },
  },
  path_stops: {
    type: 'circle',
    minzoom: 12,
    paint: {
      'circle-color': 'rgba(233, 237, 28, 1)',
      'circle-radius': {
        stops: [
          [
            10,
            2,
          ],
          [
            14,
            5,
          ],
        ],
      },
      'circle-stroke-width': 1,
      'circle-pitch-scale': 'map',
    },
  },
  path_stops_labels: {
    type: 'symbol',
    minzoom: 14,
    layout: {
      'text-field': '{station}',
      'symbol-placement': 'point',
      'symbol-spacing': 250,
      'symbol-avoid-edges': false,
      'text-size': 14,
      'text-anchor': 'center',
    },
    paint: {
      'text-halo-color': 'rgba(255, 255, 255, 1)',
      'text-halo-width': 1,
      'text-translate': [
        1,
        20,
      ],
    },
  },
  bike_routes: {
    type: 'line',
    sourceLayer: 'layer0',
    minzoom: 11,
    paint: {
      'line-color': {
        property: 'ft_facilit',
        type: 'categorical',
        stops: [
          ['Sidewalk', '#fbb03b'],
          ['Bike-Friendly Parking', '#223b53'],
          ['Velodrome', '#e55e5e'],
          ['Protected Path', '#3bb2d0'],
          ['Sharrows/Standard', '#ccc'],
          ['<Null>', '#fbb03b'],
          ['Sharrows', '#223b53'],
          ['Dirt Trail', '#e55e5e'],
          ['Curbside', '#3bb2d0'],
          ['Curbside/Sharrows', '#ccc'],
          ['Ped Plaza', '#fbb03b'],
          ['Standard', '#223b53'],
          ['Standard/Sharrows', '#e55e5e'],
          ['Signed Route', '#3bb2d0'],
          ['Boardwalk', '#ccc'],
          ['Sharrows/Protected Path', '#3bb2d0'],
          ['Greenway', '#ccc'],
          ['Opposite Sidewalk', '#ccc'],
        ],
      },
      'line-opacity': 0.7,
      'line-width': {
        stops: [
          [
            10,
            0.5,
          ],
          [
            16,
            3,
          ],
        ],
      },
    },
  },
};

export const sources = {
  subway_lines: {
    data: `https://${appConfig.carto_domain}/user/${appConfig.carto_user}/api/v2/sql?q=SELECT%20*%20FROM%20support_trans_mta_subway_routes&format=geojson`,
  },
  subway_stations: {
    data: `https://${appConfig.carto_domain}/user/${appConfig.carto_user}/api/v2/sql?q=SELECT%20*%20FROM%20support_trans_mta_subway_stops&format=geojson`,
  },
  bus_stops: {
    options: {
      carto_user: appConfig.carto_user,
      carto_domain: appConfig.carto_domain,
      sql: ['SELECT * FROM support_trans_mta_bus_stops'],
    },
  },
  path_routes: {
    data: `https://${appConfig.carto_domain}/user/${appConfig.carto_user}/api/v2/sql?q=SELECT%20*%20FROM%20support_trans_path_rail_routes&format=geojson`,
  },
  path_stops: {
    data: `https://${appConfig.carto_domain}/user/${appConfig.carto_user}/api/v2/sql?q=SELECT%20*%20FROM%20support_trans_path_rail_stops&format=geojson`,
  },
  bike_routes: {
    tiles: ['https://api.capitalplanning.nyc/static_tiles/bike_routes/{z}/{x}/{y}.mvt'],
  },
};
