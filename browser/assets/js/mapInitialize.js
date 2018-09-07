$(document).ready(function(){
     createmap();
    $("body").on('click','#idmapin',function(){
        createmap();
    });


});

var iddemo = 0;
createmap = function(){
    if($('#mapsvg').length === 1){
        $('#mapsvg .mat-figure').html('<div id="maploader'+iddemo+'"></div>');      
        $("#maploader"+iddemo).mapSvg(
            {
                width: 999.73236,
                height: 679.94141,
                colors: {
                    baseDefault: "#000000",
                    background: "#dae9f0",
                    selected: "#da4d18",
                    hover: 20,
                    directory: "#fafafa",
                    status: {},
                    base: "#e18b34",
                    disabled: "#b28080",
                    stroke: "#bdc2f0"},
                    regions: 
                    {
                        //enable
                        'path7297': 
                        {
                            id: "path7297",
                            'id_no_spaces': "path7297",
                            tooltip: "CHIUAHUA Y CD. JUAREZ",
                            data: {}
                        },
                        'path7315': 
                        {
                            id: "path7315",
                            'id_no_spaces': "path7315",
                            tooltip: "TORREÓN",
                            data: {}
                        }
                        ,
                       'path7321':
                       {
                        id: "path7321",
                        'id_no_spaces': "path7321",
                        tooltip: "MONTERREY",
                        data: {}
                    },
                    'path7329':
                    {
                     id: "path7329",
                     'id_no_spaces': "path7329",
                     tooltip: "TAMAULIPAS",
                     data: {}
                 },
                    'path7391':
                    {
                     id: "path7391",
                     'id_no_spaces': "path7391",
                     tooltip: "VERACRUZ",
                     data: {}
                 }, 
                 'path7339':
                 {
                  id: "path7339",
                  'id_no_spaces': "path7339",
                  tooltip: "AGUASCALIENTES",
                  data: {}
              },
              'path7361':
              {
                id: "path7361",
                'id_no_spaces': "path7361",
                tooltip: "LEÓN",
                data: {}
            },
              'path7359':
                 {
                  id: "path7359",
                  'id_no_spaces': "path7359",
                  tooltip: "QUERETARO",
                  data: {}
              },
              'path7365':
                 {
                  id: "path7365",
                  'id_no_spaces': "path7365",
                  tooltip: "HIDALGO",
                  data: {}
              },
              'path7377':
                 {
                  id: "path7377",
                  'id_no_spaces': "path7377",
                  tooltip: "ESTADO DE MÉXICO <u><li>Chalco</li><li>Tecámac</li><li>Tizayuca</li><li>Toluca</li></u>",
                  data: {}
              },
              'path7369':
              {
               id: "path7369",
               'id_no_spaces': "path7369",
               tooltip: "CIUDAD DE MÉXICO",
               data: {}
           },
             'path7385':
              {
               id: "path7385",
               'id_no_spaces': "path7385",
               tooltip: "PUEBLA",
               data: {}
           },
           'path7357':
           {
            id: "path7357",
            'id_no_spaces': "path7357",
            tooltip: "YUCATAN - MÉRIDA",
            data: {}
        },
        'path7381':
        {
         id: "path7381",
         'id_no_spaces': "path7381",
         tooltip: "QUINTANA ROO",
         data: {}
     },

                        //desable
                        'path7375':
                        {
                            id: "path7375",
                            'id_no_spaces': "path7375",
                            tooltip: "",
                            disabled: true,
                            data: {}
                        },'path7351':
                        {
                            id: "path7351",
                            'id_no_spaces': "path7351",
                            tooltip: "",
                            disabled: true,
                            data: {}
                        },'path7347':
                        {
                            id: "path7347",
                            'id_no_spaces': "path7347",
                            tooltip: "",
                            disabled: true,
                            data: {}
                        },'path7323':
                        {
                            id: "path7323",
                            'id_no_spaces': "path7323",
                            tooltip: "",
                            disabled: true,
                            data: {}
                        },'path7307':
                        {
                            id: "path7307",
                            'id_no_spaces': "path7307",
                            tooltip: "",
                            disabled: true,
                            data: {}
                        },'path7397':
                        {
                            id: "path7397",
                            'id_no_spaces': "path7397",
                            tooltip: "",
                            disabled: true,
                            data: {}
                        },'path7395':
                        {
                            id: "path7395",
                            'id_no_spaces': "path7395",
                            tooltip: "",
                            disabled: true,
                            data: {}
                        },'path7389':
                        {
                            id: "path7389",
                            'id_no_spaces': "path7389",
                            tooltip: "",
                            disabled: true,
                            data: {}
                        },'path7387':
                        {
                            id: "path7387",
                            'id_no_spaces': "path7387",
                            tooltip: "",
                            disabled: true,
                            data: {}
                        },'path7379':
                        {
                            id: "path7379",
                            'id_no_spaces': "path7379",
                            tooltip: "",
                            disabled: true,
                            data: {}
                        },'path7383':
                        {
                            id: "path7383",
                            'id_no_spaces': "path7383",
                            tooltip: "",
                            disabled: true,
                            data: {}
                        },'path7373':
                        {
                            id: "path7373",
                            'id_no_spaces': "path7373",
                            tooltip: "",
                            disabled: true,
                            data: {}
                        },'path7393':
                        {
                            id: "path7393",
                            'id_no_spaces': "path7393",
                            tooltip: "",
                            disabled: true,
                            data: {}
                        },'path7367':
                        {
                            id: "path7367",
                            'id_no_spaces': "path7367",
                            tooltip: "",
                            disabled: true,
                            data: {}
                        },'path7345':
                        {
                            id: "path7345",
                            'id_no_spaces': "path7345",
                            tooltip: "",
                            disabled: true,
                            data: {}
                        },'path7363':
                        {
                            id: "path7363",
                            'id_no_spaces': "path7363",
                            tooltip: "",
                            disabled: true,
                            data: {}
                        },'path7371':
                        {
                            id: "path7371",
                            'id_no_spaces': "path7371",
                            tooltip: "",
                            disabled: true,
                            data: {}
                        },'path7371':
                        {
                            id: "path7371",
                            'id_no_spaces': "path7371",
                            tooltip: "",
                            disabled: true,
                            data: {}
                        },'path7371':
                        {
                            id: "path7371",
                            'id_no_spaces': "path7371",
                            tooltip: "",
                            disabled: true,
                            data: {}
                        },'path7371':
                        {
                            id: "path7371",
                            'id_no_spaces': "path7371",
                            tooltip: "",
                            disabled: true,
                            data: {}
                        },'path7353':
                        {
                            id: "path7353",
                            'id_no_spaces': "path7353",
                            tooltip: "",
                            disabled: true,
                            data: {}
                        },'path7337':
                        {
                            id: "path7337",
                            'id_no_spaces': "path7337",
                            tooltip: "",
                            disabled: true,
                            data: {}
                        },'path7333':
                        {
                            id: "path7333",
                            'id_no_spaces': "path7333",
                            tooltip: "",
                            disabled: true,
                            data: {}
                        },'path7355':
                        {
                            id: "path7355",
                            'id_no_spaces': "path7355",
                            tooltip: "",
                            disabled: true,
                            data: {}
                        },'path7343':
                        {
                            id: "path7343",
                            'id_no_spaces': "path7343",
                            tooltip: "",
                            disabled: true,
                            data: {}
                        },'path7341':
                        {
                            id: "path7341",
                            'id_no_spaces': "path7341",
                            tooltip: "",
                            disabled: true,
                            data: {}
                        },'path7335':
                        {
                            id: "path7335",
                            'id_no_spaces': "path7335",
                            tooltip: "",
                            disabled: true,
                            data: {}
                        },'path7331':
                        {
                            id: "path7331",
                            'id_no_spaces': "path7331",
                            tooltip: "",
                            disabled: true,
                            data: {}
                        },'path7317':
                        {
                            id: "path7317",
                            'id_no_spaces': "path7317",
                            tooltip: "",
                            disabled: true,
                            data: {}
                        },'path7313':
                        {
                            id: "path7313",
                            'id_no_spaces': "path7313",
                            tooltip: "",
                            disabled: true,
                            data: {}
                        },
                        'path7311':
                        {
                            id: "path7311",
                            'id_no_spaces': "path7311",
                            tooltip: "",
                            disabled: true,
                            data: {}
                        },'path7309':
                        {
                            id: "path7309",
                            'id_no_spaces': "path7309",
                            tooltip: "",
                            disabled: true,
                            data: {}
                        },'path7305':
                        {
                            id: "path7305",
                            'id_no_spaces': "path7305",
                            tooltip: "",
                            disabled: true,
                            data: {}
                        },'path7303':
                        {
                            id: "path7303",
                            'id_no_spaces': "path7303",
                            tooltip: "",
                            disabled: true,
                            data: {}
                        },'path7301':
                        {
                            id: "path7301",
                            'id_no_spaces': "path7301",
                            tooltip: "",
                            disabled: true,
                            data: {}
                        },'path7299':
                        {
                            id: "path7299",
                            'id_no_spaces': "path7299",
                            tooltip: "",
                            disabled: true,
                            data: {}
                        },'path7295':
                        {
                            id: "path7295",
                            'id_no_spaces': "path7295",
                            tooltip: "",
                            disabled: true,
                            data: {}
                        },'path7293':
                        {
                            id: "path7293",
                            'id_no_spaces': "path7293",
                            tooltip: "",
                            disabled: true,
                            data: {}
                        },'path7291':
                        {
                            id: "path7291",
                            'id_no_spaces': "path7291",
                            tooltip: "",
                            disabled: true,
                            data: {}
                        },'path7287':
                        {
                            id: "path7287",
                            'id_no_spaces': "path7287",
                            tooltip: "",
                            disabled: true,
                            data: {}
                        },'path7281':
                        {
                            id: "path7281",
                            'id_no_spaces': "path7281",
                            tooltip: "",
                            disabled: true,
                            data: {}
                        },'path7285':
                        {
                            id: "path7285",
                            'id_no_spaces': "path7285",
                            tooltip: "",
                            disabled: true,
                            data: {}
                        },'path7283':
                        {
                            id: "path7283",
                            'id_no_spaces': "path7283",
                            tooltip: "",
                            disabled: true,
                            data: {}
                        },'path7275':
                        {
                            id: "path7275",
                            'id_no_spaces': "path7275",
                            tooltip: "",
                            disabled: true,
                            data: {}
                        },'path7273':
                        {
                            id: "path7273",
                            'id_no_spaces': "path7273",
                            tooltip: "",
                            disabled: true,
                            data: {}
                        },'path7279':
                        {
                            id: "path7279",
                            'id_no_spaces': "path7279",
                            tooltip: "",
                            disabled: true,
                            data: {}
                        },'path7277':
                        {
                            id: "path7277",
                            'id_no_spaces': "path7277",
                            tooltip: "",
                            disabled: true,
                            data: {}
                        },'path7289':
                        {
                            id: "path7289",
                            'id_no_spaces': "path7289",
                            tooltip: "",
                            disabled: true,
                            data: {}
                        },'path3930':
                        {
                            id: "path3930",
                            'id_no_spaces': "path3930",
                            tooltip: "",
                            disabled: true,
                            data: {}
                        },
                        /////////
'path7371':
{
    id: "path7371",
    'id_no_spaces': "path7371",
    tooltip: "",
    disabled: true,
    data: {}
},
                        'path7349':{
                            id: "path7325",
                            'id_no_spaces': "path7325",
                            tooltip: "",
                            disabled: true,
                            data: {}
                        },
                        'path7325':
                        {
                         id: "path7325",
                         'id_no_spaces': "path7325",
                         tooltip: "",
                         disabled: true,
                         data: {}
                     },'path7355':
                     {
                      id: "path7355",
                      'id_no_spaces': "path7355",
                      tooltip: "",
                      disabled: true,
                      data: {}
                  },
                        'path7375':
                       {
                        id: "path7375",
                        'id_no_spaces': "path7289",
                        tooltip: "",
                        disabled: true,
                        data: {}
                    },
                    
                        'path7319':
                       {
                        id: "path7319",
                        'id_no_spaces': "path7319",
                        tooltip: "",
                        disabled: true,
                        data: {}
                    },
                    
                        'path7285':
                       {
                        id: "path7285",
                        'id_no_spaces': "path7285",
                        tooltip: "",
                        disabled: true,
                        data: {}
                    },
                    'path7327':
                    {
                     id: "path7289",
                     'id_no_spaces': "path7289",
                     tooltip: "",
                     disabled: true,
                     data: {}
                 }  ,
                    'path7289':
                    {
                     id: "path7289",
                     'id_no_spaces': "path7289",
                     tooltip: "",
                     disabled: true,
                     data: {}
                 }  
                    },
                    viewBox: [0,0,999.73236,679.94141],
                    tooltips: 
                    {
                        mode: "id",
                        on: false,
                        priority: "local",
                        position: "left"
                    },
                    gauge: 
                    {
                        on: false,
                        labels: 
                        {
                            low: "low",
                            high: "high"
                        },
                        colors: 
                        {
                            lowRGB: 
                            {r: 193,g: 77,b: 32,a: 1},
                            highRGB: {r: 44,g: 50,b: 66,a: 1},
                            low: "#c14d20",
                            high: "#2c3242",
                            diffRGB: {r: -149,g: -27,b: 34,a: 0}},
                            min: 0,
                            max: false
                        },
source: "/assets/img/global/MexicoMap.svg",
title: "Mexico_Map",
responsive: true
            }
                
        );
        
            iddemo++;
    }
}