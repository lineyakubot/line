var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var message = {
  "type": "carousel",
	"altText": "【警告】",
  "contents": [
    {
      "type": "bubble",
      "body": {
        "type": "box",
        "layout": "vertical",
        "spacing": "md",
        "contents": [
          {
            "type": "text",
            "text": "FT",
            "wrap": true,
            "weight": "bold",
            "gravity": "center",
            "size": "lg"
          },
          {
            "type": "box",
            "layout": "baseline",
            "spacing": "sm",
            "contents": [
              {
                "type": "icon",
                "url": "https://sitthi.me:3807/static/flag/Portugal.png",
                "size": "sm"
              },
              {
                "type": "text",
                "text": "Portugal",
                "flex": 5,
                "align": "start"
              },
              {
                "type": "text",
                "text": "1 : 0",
                "flex": 2,
                "align": "center"
              },
              {
                "type": "text",
                "text": "Morocco",
                "flex": 5,
                "align": "end"
              },
              {
                "type": "icon",
                "url": "https://sitthi.me:3807/static/flag/Morocco.png",
                "size": "sm"
              }
            ]
          },
          {
            "type": "box",
            "layout": "vertical",
            "margin": "lg",
            "spacing": "sm",
            "contents": [
              {
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "text",
                    "text": "Scorer",
                    "color": "#aaaaaa",
                    "size": "sm",
                    "weight": "bold"
                  }
                ]
              },
              {
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "text",
                    "text": "4'",
                    "color": "#aaaaaa",
                    "size": "sm",
                    "flex": 1
                  },
                  {
                    "type": "text",
                    "text": "1 - 0",
                    "wrap": true,
                    "color": "#666666",
                    "size": "sm",
                    "flex": 1
                  },
                  {
                    "type": "icon",
                    "url": "https://sitthi.me:3807/static/football.png",
                    "size": "sm"
                  },
                  {
                    "type": "text",
                    "text": "C.  Cristiano Ronaldo",
                    "wrap": true,
                    "color": "#666666",
                    "size": "sm",
                    "flex": 4
                  },
                  {
                    "type": "icon",
                    "url": "https://sitthi.me:3807/static/flag/Portugal.png",
                    "size": "sm"
                  }
                ]
              },
              {
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "text",
                    "text": "Card",
                    "color": "#aaaaaa",
                    "size": "sm",
                    "weight": "bold"
                  }
                ]
              },
              {
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "text",
                    "text": "40'",
                    "color": "#aaaaaa",
                    "size": "sm",
                    "flex": 1
                  },
                  {
                    "type": "icon",
                    "url": "https://sitthi.me:3807/static/yellowcard.png",
                    "size": "sm"
                  },
                  {
                    "type": "text",
                    "text": "M.  Medhi Benatia",
                    "wrap": true,
                    "color": "#666666",
                    "size": "sm",
                    "flex": 4
                  }
                ]
              },
              {
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "text",
                    "text": "90'",
                    "color": "#aaaaaa",
                    "size": "sm",
                    "flex": 1
                  },
                  {
                    "type": "icon",
                    "url": "https://sitthi.me:3807/static/yellowcard.png",
                    "size": "sm"
                  },
                  {
                    "type": "text",
                    "text": "A.  Adrien Silva",
                    "wrap": true,
                    "color": "#666666",
                    "size": "sm",
                    "flex": 4
                  }
                ]
              }
            ]
          }
        ]
      },
      "footer": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "separator",
            "margin": "xxl"
          },
          {
            "type": "box",
            "layout": "baseline",
            "margin": "md",
            "contents": [
              {
                "type": "text",
                "text": "Group",
                "color": "#aaaaaa",
                "size": "sm",
                "flex": 2
              },
              {
                "type": "text",
                "text": "B",
                "wrap": true,
                "color": "#666666",
                "size": "sm",
                "flex": 4
              }
            ]
          },
          {
            "type": "box",
            "layout": "baseline",
            "spacing": "sm",
            "contents": [
              {
                "type": "text",
                "text": "Date",
                "color": "#aaaaaa",
                "size": "sm",
                "flex": 2
              },
              {
                "type": "text",
                "text": "2018-06-20 19:00",
                "wrap": true,
                "size": "sm",
                "color": "#666666",
                "flex": 4
              }
            ]
          },
          {
            "type": "separator",
            "margin": "md"
          },
          {
            "type": "button",
            "style": "primary",
            "margin": "sm",
            "action": {
              "type": "postback",
              "label": "Head 2 Head",
              "displayText": "Portugal VS Morocco",
              "data": "H2H_293768"
            }
          },
          {
            "type": "button",
            "style": "primary",
            "margin": "sm",
            "action": {
              "type": "postback",
              "label": "Match Statistics",
              "displayText": "Portugal VS Morocco",
              "data": "STAT_293768"
            }
          },
          {
            "type": "button",
            "margin": "sm",
            "action": {
              "type": "uri",
              "label": "View Source",
              "uri": "https://sitthi.me:3807/downloaded/3de80022227249b2bf1fec7eb08127f5.json"
            },
            "style": "secondary"
          }
        ]
      }
    },
    {
      "type": "bubble",
      "body": {
        "type": "box",
        "layout": "vertical",
        "spacing": "md",
        "contents": [
          {
            "type": "text",
            "text": "FT",
            "wrap": true,
            "weight": "bold",
            "gravity": "center",
            "size": "lg"
          },
          {
            "type": "box",
            "layout": "baseline",
            "spacing": "sm",
            "contents": [
              {
                "type": "icon",
                "url": "https://sitthi.me:3807/static/flag/Russia.png",
                "size": "sm"
              },
              {
                "type": "text",
                "text": "Russia",
                "flex": 5,
                "align": "start"
              },
              {
                "type": "text",
                "text": "3 : 1",
                "flex": 2,
                "align": "center"
              },
              {
                "type": "text",
                "text": "Egypt",
                "flex": 5,
                "align": "end"
              },
              {
                "type": "icon",
                "url": "https://sitthi.me:3807/static/flag/Egypt.png",
                "size": "sm"
              }
            ]
          },
          {
            "type": "box",
            "layout": "vertical",
            "margin": "lg",
            "spacing": "sm",
            "contents": [
              {
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "text",
                    "text": "Scorer",
                    "color": "#aaaaaa",
                    "size": "sm",
                    "weight": "bold"
                  }
                ]
              },
              {
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "text",
                    "text": "47'",
                    "color": "#aaaaaa",
                    "size": "sm",
                    "flex": 1
                  },
                  {
                    "type": "text",
                    "text": "1 - 0",
                    "wrap": true,
                    "color": "#666666",
                    "size": "sm",
                    "flex": 1
                  },
                  {
                    "type": "icon",
                    "url": "https://sitthi.me:3807/static/football.png",
                    "size": "sm"
                  },
                  {
                    "type": "text",
                    "text": "A.  Ahmed Fathi",
                    "wrap": true,
                    "color": "#666666",
                    "size": "sm",
                    "flex": 4
                  },
                  {
                    "type": "icon",
                    "url": "https://sitthi.me:3807/static/flag/Russia.png",
                    "size": "sm"
                  }
                ]
              },
              {
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "text",
                    "text": "59'",
                    "color": "#aaaaaa",
                    "size": "sm",
                    "flex": 1
                  },
                  {
                    "type": "text",
                    "text": "2 - 0",
                    "wrap": true,
                    "color": "#666666",
                    "size": "sm",
                    "flex": 1
                  },
                  {
                    "type": "icon",
                    "url": "https://sitthi.me:3807/static/football.png",
                    "size": "sm"
                  },
                  {
                    "type": "text",
                    "text": "D.  Denis Cheryshev",
                    "wrap": true,
                    "color": "#666666",
                    "size": "sm",
                    "flex": 4
                  },
                  {
                    "type": "icon",
                    "url": "https://sitthi.me:3807/static/flag/Russia.png",
                    "size": "sm"
                  }
                ]
              },
              {
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "text",
                    "text": "62'",
                    "color": "#aaaaaa",
                    "size": "sm",
                    "flex": 1
                  },
                  {
                    "type": "text",
                    "text": "3 - 0",
                    "wrap": true,
                    "color": "#666666",
                    "size": "sm",
                    "flex": 1
                  },
                  {
                    "type": "icon",
                    "url": "https://sitthi.me:3807/static/football.png",
                    "size": "sm"
                  },
                  {
                    "type": "text",
                    "text": "A.  Artem Dzyuba",
                    "wrap": true,
                    "color": "#666666",
                    "size": "sm",
                    "flex": 4
                  },
                  {
                    "type": "icon",
                    "url": "https://sitthi.me:3807/static/flag/Russia.png",
                    "size": "sm"
                  }
                ]
              },
              {
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "text",
                    "text": "73'",
                    "color": "#aaaaaa",
                    "size": "sm",
                    "flex": 1
                  },
                  {
                    "type": "text",
                    "text": "3 - 1",
                    "wrap": true,
                    "color": "#666666",
                    "size": "sm",
                    "flex": 1
                  },
                  {
                    "type": "icon",
                    "url": "https://sitthi.me:3807/static/football.png",
                    "size": "sm"
                  },
                  {
                    "type": "text",
                    "text": "M.  Mohamed Salah",
                    "wrap": true,
                    "color": "#666666",
                    "size": "sm",
                    "flex": 4
                  },
                  {
                    "type": "icon",
                    "url": "https://sitthi.me:3807/static/flag/Egypt.png",
                    "size": "sm"
                  }
                ]
              },
              {
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "text",
                    "text": "Card",
                    "color": "#aaaaaa",
                    "size": "sm",
                    "weight": "bold"
                  }
                ]
              },
              {
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "text",
                    "text": "57'",
                    "color": "#aaaaaa",
                    "size": "sm",
                    "flex": 1
                  },
                  {
                    "type": "icon",
                    "url": "https://sitthi.me:3807/static/yellowcard.png",
                    "size": "sm"
                  },
                  {
                    "type": "text",
                    "text": "Trezeguet",
                    "wrap": true,
                    "color": "#666666",
                    "size": "sm",
                    "flex": 4
                  }
                ]
              },
              {
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "text",
                    "text": "84'",
                    "color": "#aaaaaa",
                    "size": "sm",
                    "flex": 1
                  },
                  {
                    "type": "icon",
                    "url": "https://sitthi.me:3807/static/yellowcard.png",
                    "size": "sm"
                  },
                  {
                    "type": "text",
                    "text": "F.  Fedor Smolov",
                    "wrap": true,
                    "color": "#666666",
                    "size": "sm",
                    "flex": 4
                  }
                ]
              }
            ]
          }
        ]
      },
      "footer": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "separator",
            "margin": "xxl"
          },
          {
            "type": "box",
            "layout": "baseline",
            "margin": "md",
            "contents": [
              {
                "type": "text",
                "text": "Group",
                "color": "#aaaaaa",
                "size": "sm",
                "flex": 2
              },
              {
                "type": "text",
                "text": "A",
                "wrap": true,
                "color": "#666666",
                "size": "sm",
                "flex": 4
              }
            ]
          },
          {
            "type": "box",
            "layout": "baseline",
            "spacing": "sm",
            "contents": [
              {
                "type": "text",
                "text": "Date",
                "color": "#aaaaaa",
                "size": "sm",
                "flex": 2
              },
              {
                "type": "text",
                "text": "2018-06-20 01:00",
                "wrap": true,
                "size": "sm",
                "color": "#666666",
                "flex": 4
              }
            ]
          },
          {
            "type": "separator",
            "margin": "md"
          },
          {
            "type": "button",
            "style": "primary",
            "margin": "sm",
            "action": {
              "type": "postback",
              "label": "Head 2 Head",
              "displayText": "Russia VS Egypt",
              "data": "H2H_293762"
            }
          },
          {
            "type": "button",
            "style": "primary",
            "margin": "sm",
            "action": {
              "type": "postback",
              "label": "Match Statistics",
              "displayText": "Russia VS Egypt",
              "data": "STAT_293762"
            }
          },
          {
            "type": "button",
            "margin": "sm",
            "action": {
              "type": "uri",
              "label": "View Source",
              "uri": "https://sitthi.me:3807/downloaded/3de80022227249b2bf1fec7eb08127f5.json"
            },
            "style": "secondary"
          }
        ]
      }
    },
    {
      "type": "bubble",
      "body": {
        "type": "box",
        "layout": "vertical",
        "spacing": "md",
        "contents": [
          {
            "type": "text",
            "text": "FT",
            "wrap": true,
            "weight": "bold",
            "gravity": "center",
            "size": "lg"
          },
          {
            "type": "box",
            "layout": "baseline",
            "spacing": "sm",
            "contents": [
              {
                "type": "icon",
                "url": "https://sitthi.me:3807/static/flag/Poland.png",
                "size": "sm"
              },
              {
                "type": "text",
                "text": "Poland",
                "flex": 5,
                "align": "start"
              },
              {
                "type": "text",
                "text": "1 : 2",
                "flex": 2,
                "align": "center"
              },
              {
                "type": "text",
                "text": "Senegal",
                "flex": 5,
                "align": "end"
              },
              {
                "type": "icon",
                "url": "https://sitthi.me:3807/static/flag/Senegal.png",
                "size": "sm"
              }
            ]
          },
          {
            "type": "box",
            "layout": "vertical",
            "margin": "lg",
            "spacing": "sm",
            "contents": [
              {
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "text",
                    "text": "Scorer",
                    "color": "#aaaaaa",
                    "size": "sm",
                    "weight": "bold"
                  }
                ]
              },
              {
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "text",
                    "text": "37'",
                    "color": "#aaaaaa",
                    "size": "sm",
                    "flex": 1
                  },
                  {
                    "type": "text",
                    "text": "0 - 1",
                    "wrap": true,
                    "color": "#666666",
                    "size": "sm",
                    "flex": 1
                  },
                  {
                    "type": "icon",
                    "url": "https://sitthi.me:3807/static/football.png",
                    "size": "sm"
                  },
                  {
                    "type": "text",
                    "text": "T.  Thiago  Cionek",
                    "wrap": true,
                    "color": "#666666",
                    "size": "sm",
                    "flex": 4
                  },
                  {
                    "type": "icon",
                    "url": "https://sitthi.me:3807/static/flag/Senegal.png",
                    "size": "sm"
                  }
                ]
              },
              {
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "text",
                    "text": "60'",
                    "color": "#aaaaaa",
                    "size": "sm",
                    "flex": 1
                  },
                  {
                    "type": "text",
                    "text": "0 - 2",
                    "wrap": true,
                    "color": "#666666",
                    "size": "sm",
                    "flex": 1
                  },
                  {
                    "type": "icon",
                    "url": "https://sitthi.me:3807/static/football.png",
                    "size": "sm"
                  },
                  {
                    "type": "text",
                    "text": "M.  Mbaye Niang",
                    "wrap": true,
                    "color": "#666666",
                    "size": "sm",
                    "flex": 4
                  },
                  {
                    "type": "icon",
                    "url": "https://sitthi.me:3807/static/flag/Senegal.png",
                    "size": "sm"
                  }
                ]
              },
              {
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "text",
                    "text": "86'",
                    "color": "#aaaaaa",
                    "size": "sm",
                    "flex": 1
                  },
                  {
                    "type": "text",
                    "text": "1 - 2",
                    "wrap": true,
                    "color": "#666666",
                    "size": "sm",
                    "flex": 1
                  },
                  {
                    "type": "icon",
                    "url": "https://sitthi.me:3807/static/football.png",
                    "size": "sm"
                  },
                  {
                    "type": "text",
                    "text": "G.  Grzegorz Krychowiak",
                    "wrap": true,
                    "color": "#666666",
                    "size": "sm",
                    "flex": 4
                  },
                  {
                    "type": "icon",
                    "url": "https://sitthi.me:3807/static/flag/Poland.png",
                    "size": "sm"
                  }
                ]
              },
              {
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "text",
                    "text": "Card",
                    "color": "#aaaaaa",
                    "size": "sm",
                    "weight": "bold"
                  }
                ]
              },
              {
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "text",
                    "text": "12'",
                    "color": "#aaaaaa",
                    "size": "sm",
                    "flex": 1
                  },
                  {
                    "type": "icon",
                    "url": "https://sitthi.me:3807/static/yellowcard.png",
                    "size": "sm"
                  },
                  {
                    "type": "text",
                    "text": "G.  Grzegorz Krychowiak",
                    "wrap": true,
                    "color": "#666666",
                    "size": "sm",
                    "flex": 4
                  }
                ]
              },
              {
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "text",
                    "text": "49'",
                    "color": "#aaaaaa",
                    "size": "sm",
                    "flex": 1
                  },
                  {
                    "type": "icon",
                    "url": "https://sitthi.me:3807/static/yellowcard.png",
                    "size": "sm"
                  },
                  {
                    "type": "text",
                    "text": "S.  Salif Sane",
                    "wrap": true,
                    "color": "#666666",
                    "size": "sm",
                    "flex": 4
                  }
                ]
              },
              {
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "text",
                    "text": "72'",
                    "color": "#aaaaaa",
                    "size": "sm",
                    "flex": 1
                  },
                  {
                    "type": "icon",
                    "url": "https://sitthi.me:3807/static/yellowcard.png",
                    "size": "sm"
                  },
                  {
                    "type": "text",
                    "text": "I. G.  Idrissa Gana Gueye",
                    "wrap": true,
                    "color": "#666666",
                    "size": "sm",
                    "flex": 4
                  }
                ]
              }
            ]
          }
        ]
      },
      "footer": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "separator",
            "margin": "xxl"
          },
          {
            "type": "box",
            "layout": "baseline",
            "margin": "md",
            "contents": [
              {
                "type": "text",
                "text": "Group",
                "color": "#aaaaaa",
                "size": "sm",
                "flex": 2
              },
              {
                "type": "text",
                "text": "H",
                "wrap": true,
                "color": "#666666",
                "size": "sm",
                "flex": 4
              }
            ]
          },
          {
            "type": "box",
            "layout": "baseline",
            "spacing": "sm",
            "contents": [
              {
                "type": "text",
                "text": "Date",
                "color": "#aaaaaa",
                "size": "sm",
                "flex": 2
              },
              {
                "type": "text",
                "text": "2018-06-19 22:00",
                "wrap": true,
                "size": "sm",
                "color": "#666666",
                "flex": 4
              }
            ]
          },
          {
            "type": "separator",
            "margin": "md"
          },
          {
            "type": "button",
            "style": "primary",
            "margin": "sm",
            "action": {
              "type": "postback",
              "label": "Head 2 Head",
              "displayText": "Poland VS Senegal",
              "data": "H2H_293803"
            }
          },
          {
            "type": "button",
            "style": "primary",
            "margin": "sm",
            "action": {
              "type": "postback",
              "label": "Match Statistics",
              "displayText": "Poland VS Senegal",
              "data": "STAT_293803"
            }
          },
          {
            "type": "button",
            "margin": "sm",
            "action": {
              "type": "uri",
              "label": "View Source",
              "uri": "https://sitthi.me:3807/downloaded/3de80022227249b2bf1fec7eb08127f5.json"
            },
            "style": "secondary"
          }
        ]
      }
    },
    {
      "type": "bubble",
      "body": {
        "type": "box",
        "layout": "vertical",
        "spacing": "md",
        "contents": [
          {
            "type": "text",
            "text": "FT",
            "wrap": true,
            "weight": "bold",
            "gravity": "center",
            "size": "lg"
          },
          {
            "type": "box",
            "layout": "baseline",
            "spacing": "sm",
            "contents": [
              {
                "type": "icon",
                "url": "https://sitthi.me:3807/static/flag/Colombia.png",
                "size": "sm"
              },
              {
                "type": "text",
                "text": "Colombia",
                "flex": 5,
                "align": "start"
              },
              {
                "type": "text",
                "text": "1 : 2",
                "flex": 2,
                "align": "center"
              },
              {
                "type": "text",
                "text": "Japan",
                "flex": 5,
                "align": "end"
              },
              {
                "type": "icon",
                "url": "https://sitthi.me:3807/static/flag/Japan.png",
                "size": "sm"
              }
            ]
          },
          {
            "type": "box",
            "layout": "vertical",
            "margin": "lg",
            "spacing": "sm",
            "contents": [
              {
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "text",
                    "text": "Scorer",
                    "color": "#aaaaaa",
                    "size": "sm",
                    "weight": "bold"
                  }
                ]
              },
              {
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "text",
                    "text": "6'",
                    "color": "#aaaaaa",
                    "size": "sm",
                    "flex": 1
                  },
                  {
                    "type": "text",
                    "text": "0 - 1",
                    "wrap": true,
                    "color": "#666666",
                    "size": "sm",
                    "flex": 1
                  },
                  {
                    "type": "icon",
                    "url": "https://sitthi.me:3807/static/football.png",
                    "size": "sm"
                  },
                  {
                    "type": "text",
                    "text": "S.  Shinji Kagawa",
                    "wrap": true,
                    "color": "#666666",
                    "size": "sm",
                    "flex": 4
                  },
                  {
                    "type": "icon",
                    "url": "https://sitthi.me:3807/static/flag/Japan.png",
                    "size": "sm"
                  }
                ]
              },
              {
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "text",
                    "text": "39'",
                    "color": "#aaaaaa",
                    "size": "sm",
                    "flex": 1
                  },
                  {
                    "type": "text",
                    "text": "1 - 1",
                    "wrap": true,
                    "color": "#666666",
                    "size": "sm",
                    "flex": 1
                  },
                  {
                    "type": "icon",
                    "url": "https://sitthi.me:3807/static/football.png",
                    "size": "sm"
                  },
                  {
                    "type": "text",
                    "text": "J.  Juan Quintero",
                    "wrap": true,
                    "color": "#666666",
                    "size": "sm",
                    "flex": 4
                  },
                  {
                    "type": "icon",
                    "url": "https://sitthi.me:3807/static/flag/Colombia.png",
                    "size": "sm"
                  }
                ]
              },
              {
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "text",
                    "text": "73'",
                    "color": "#aaaaaa",
                    "size": "sm",
                    "flex": 1
                  },
                  {
                    "type": "text",
                    "text": "1 - 2",
                    "wrap": true,
                    "color": "#666666",
                    "size": "sm",
                    "flex": 1
                  },
                  {
                    "type": "icon",
                    "url": "https://sitthi.me:3807/static/football.png",
                    "size": "sm"
                  },
                  {
                    "type": "text",
                    "text": "Y.  Yuya Osako",
                    "wrap": true,
                    "color": "#666666",
                    "size": "sm",
                    "flex": 4
                  },
                  {
                    "type": "icon",
                    "url": "https://sitthi.me:3807/static/flag/Japan.png",
                    "size": "sm"
                  }
                ]
              },
              {
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "text",
                    "text": "Card",
                    "color": "#aaaaaa",
                    "size": "sm",
                    "weight": "bold"
                  }
                ]
              },
              {
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "text",
                    "text": "3'",
                    "color": "#aaaaaa",
                    "size": "sm",
                    "flex": 1
                  },
                  {
                    "type": "icon",
                    "url": "https://sitthi.me:3807/static/redcard.png",
                    "size": "sm"
                  },
                  {
                    "type": "text",
                    "text": "C.  Carlos Sanchez",
                    "wrap": true,
                    "color": "#666666",
                    "size": "sm",
                    "flex": 4
                  }
                ]
              },
              {
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "text",
                    "text": "64'",
                    "color": "#aaaaaa",
                    "size": "sm",
                    "flex": 1
                  },
                  {
                    "type": "icon",
                    "url": "https://sitthi.me:3807/static/yellowcard.png",
                    "size": "sm"
                  },
                  {
                    "type": "text",
                    "text": "W.  Wilmar Barrios",
                    "wrap": true,
                    "color": "#666666",
                    "size": "sm",
                    "flex": 4
                  }
                ]
              },
              {
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "text",
                    "text": "86'",
                    "color": "#aaaaaa",
                    "size": "sm",
                    "flex": 1
                  },
                  {
                    "type": "icon",
                    "url": "https://sitthi.me:3807/static/yellowcard.png",
                    "size": "sm"
                  },
                  {
                    "type": "text",
                    "text": "J.  James Rodriguez",
                    "wrap": true,
                    "color": "#666666",
                    "size": "sm",
                    "flex": 4
                  }
                ]
              },
              {
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "text",
                    "text": "90'",
                    "color": "#aaaaaa",
                    "size": "sm",
                    "flex": 1
                  },
                  {
                    "type": "icon",
                    "url": "https://sitthi.me:3807/static/yellowcard.png",
                    "size": "sm"
                  },
                  {
                    "type": "text",
                    "text": "E.  Eiji Kawashima",
                    "wrap": true,
                    "color": "#666666",
                    "size": "sm",
                    "flex": 4
                  }
                ]
              }
            ]
          }
        ]
      },
      "footer": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "separator",
            "margin": "xxl"
          },
          {
            "type": "box",
            "layout": "baseline",
            "margin": "md",
            "contents": [
              {
                "type": "text",
                "text": "Group",
                "color": "#aaaaaa",
                "size": "sm",
                "flex": 2
              },
              {
                "type": "text",
                "text": "H",
                "wrap": true,
                "color": "#666666",
                "size": "sm",
                "flex": 4
              }
            ]
          },
          {
            "type": "box",
            "layout": "baseline",
            "spacing": "sm",
            "contents": [
              {
                "type": "text",
                "text": "Date",
                "color": "#aaaaaa",
                "size": "sm",
                "flex": 2
              },
              {
                "type": "text",
                "text": "2018-06-19 19:00",
                "wrap": true,
                "size": "sm",
                "color": "#666666",
                "flex": 4
              }
            ]
          },
          {
            "type": "separator",
            "margin": "md"
          },
          {
            "type": "button",
            "style": "primary",
            "margin": "sm",
            "action": {
              "type": "postback",
              "label": "Head 2 Head",
              "displayText": "Colombia VS Japan",
              "data": "H2H_293802"
            }
          },
          {
            "type": "button",
            "style": "primary",
            "margin": "sm",
            "action": {
              "type": "postback",
              "label": "Match Statistics",
              "displayText": "Colombia VS Japan",
              "data": "STAT_293802"
            }
          },
          {
            "type": "button",
            "margin": "sm",
            "action": {
              "type": "uri",
              "label": "View Source",
              "uri": "https://sitthi.me:3807/downloaded/3de80022227249b2bf1fec7eb08127f5.json"
            },
            "style": "secondary"
          }
        ]
      }
    },
    {
      "type": "bubble",
      "body": {
        "type": "box",
        "layout": "vertical",
        "spacing": "md",
        "contents": [
          {
            "type": "text",
            "text": "FT",
            "wrap": true,
            "weight": "bold",
            "gravity": "center",
            "size": "lg"
          },
          {
            "type": "box",
            "layout": "baseline",
            "spacing": "sm",
            "contents": [
              {
                "type": "icon",
                "url": "https://sitthi.me:3807/static/flag/Tunisia.png",
                "size": "sm"
              },
              {
                "type": "text",
                "text": "Tunisia",
                "flex": 5,
                "align": "start"
              },
              {
                "type": "text",
                "text": "1 : 2",
                "flex": 2,
                "align": "center"
              },
              {
                "type": "text",
                "text": "England",
                "flex": 5,
                "align": "end"
              },
              {
                "type": "icon",
                "url": "https://sitthi.me:3807/static/flag/England.png",
                "size": "sm"
              }
            ]
          },
          {
            "type": "box",
            "layout": "vertical",
            "margin": "lg",
            "spacing": "sm",
            "contents": [
              {
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "text",
                    "text": "Scorer",
                    "color": "#aaaaaa",
                    "size": "sm",
                    "weight": "bold"
                  }
                ]
              },
              {
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "text",
                    "text": "11'",
                    "color": "#aaaaaa",
                    "size": "sm",
                    "flex": 1
                  },
                  {
                    "type": "text",
                    "text": "0 - 1",
                    "wrap": true,
                    "color": "#666666",
                    "size": "sm",
                    "flex": 1
                  },
                  {
                    "type": "icon",
                    "url": "https://sitthi.me:3807/static/football.png",
                    "size": "sm"
                  },
                  {
                    "type": "text",
                    "text": "H.  Harry Kane",
                    "wrap": true,
                    "color": "#666666",
                    "size": "sm",
                    "flex": 4
                  },
                  {
                    "type": "icon",
                    "url": "https://sitthi.me:3807/static/flag/England.png",
                    "size": "sm"
                  }
                ]
              },
              {
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "text",
                    "text": "35'",
                    "color": "#aaaaaa",
                    "size": "sm",
                    "flex": 1
                  },
                  {
                    "type": "text",
                    "text": "1 - 1",
                    "wrap": true,
                    "color": "#666666",
                    "size": "sm",
                    "flex": 1
                  },
                  {
                    "type": "icon",
                    "url": "https://sitthi.me:3807/static/football.png",
                    "size": "sm"
                  },
                  {
                    "type": "text",
                    "text": "F.  Ferjani Sassi",
                    "wrap": true,
                    "color": "#666666",
                    "size": "sm",
                    "flex": 4
                  },
                  {
                    "type": "icon",
                    "url": "https://sitthi.me:3807/static/flag/Tunisia.png",
                    "size": "sm"
                  }
                ]
              },
              {
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "text",
                    "text": "90'",
                    "color": "#aaaaaa",
                    "size": "sm",
                    "flex": 1
                  },
                  {
                    "type": "text",
                    "text": "1 - 2",
                    "wrap": true,
                    "color": "#666666",
                    "size": "sm",
                    "flex": 1
                  },
                  {
                    "type": "icon",
                    "url": "https://sitthi.me:3807/static/football.png",
                    "size": "sm"
                  },
                  {
                    "type": "text",
                    "text": "H.  Harry Kane",
                    "wrap": true,
                    "color": "#666666",
                    "size": "sm",
                    "flex": 4
                  },
                  {
                    "type": "icon",
                    "url": "https://sitthi.me:3807/static/flag/England.png",
                    "size": "sm"
                  }
                ]
              },
              {
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "text",
                    "text": "Card",
                    "color": "#aaaaaa",
                    "size": "sm",
                    "weight": "bold"
                  }
                ]
              },
              {
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "text",
                    "text": "33'",
                    "color": "#aaaaaa",
                    "size": "sm",
                    "flex": 1
                  },
                  {
                    "type": "icon",
                    "url": "https://sitthi.me:3807/static/yellowcard.png",
                    "size": "sm"
                  },
                  {
                    "type": "text",
                    "text": "K.  Kyle Walker",
                    "wrap": true,
                    "color": "#666666",
                    "size": "sm",
                    "flex": 4
                  }
                ]
              }
            ]
          }
        ]
      },
      "footer": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "separator",
            "margin": "xxl"
          },
          {
            "type": "box",
            "layout": "baseline",
            "margin": "md",
            "contents": [
              {
                "type": "text",
                "text": "Group",
                "color": "#aaaaaa",
                "size": "sm",
                "flex": 2
              },
              {
                "type": "text",
                "text": "G",
                "wrap": true,
                "color": "#666666",
                "size": "sm",
                "flex": 4
              }
            ]
          },
          {
            "type": "box",
            "layout": "baseline",
            "spacing": "sm",
            "contents": [
              {
                "type": "text",
                "text": "Date",
                "color": "#aaaaaa",
                "size": "sm",
                "flex": 2
              },
              {
                "type": "text",
                "text": "2018-06-19 01:00",
                "wrap": true,
                "size": "sm",
                "color": "#666666",
                "flex": 4
              }
            ]
          },
          {
            "type": "separator",
            "margin": "md"
          },
          {
            "type": "button",
            "style": "primary",
            "margin": "sm",
            "action": {
              "type": "postback",
              "label": "Head 2 Head",
              "displayText": "Tunisia VS England",
              "data": "H2H_293797"
            }
          },
          {
            "type": "button",
            "style": "primary",
            "margin": "sm",
            "action": {
              "type": "postback",
              "label": "Match Statistics",
              "displayText": "Tunisia VS England",
              "data": "STAT_293797"
            }
          },
          {
            "type": "button",
            "margin": "sm",
            "action": {
              "type": "uri",
              "label": "View Source",
              "uri": "https://sitthi.me:3807/downloaded/3de80022227249b2bf1fec7eb08127f5.json"
            },
            "style": "secondary"
          }
        ]
      }
    }
  ]
};

function magic() {
	return message; 
	
}



module.exports = {
	magic: magic
};
