// ==UserScript==
// @name         Instagram black version
// @namespace    http://tampermonkey.net/
// @version      0.3.4
// @description  This script add black version to instagram.com
// @author       Rhaigtz  ft:Pyromaniacal
// @match        https://www.instagram.com/*
// @icon         https://www.google.com/s2/favicons?domain=instagram.com
// @grant        none
// ==/UserScript==

(function () {
    "use strict";
  
    const elements = [
      {
        element: document.getElementsByClassName("_lz6s"),
        type: ["background", "border-bottom-color", "box-shadow"],
        color: ["#242526", "#4a4945", "0 3px 20px 1px"],
      },
      {
        element: document.getElementsByClassName("s4Iyt"),
        type: "filter",
        color: "brightness(10)",
      },
      {
        element: document.getElementsByClassName(
          "_7UhW9  PIoXz        qyrsm KV-D4          uL8Hv"
        ),
        type: "color",
        color: "white",
      },
      {
        element: document.getElementsByClassName(
          "       tHaIX              Igw0E     IwRSH      eGOV_         _4EzTm                                                                                             HVWg4                 "
        ),
        type: "background",
        color: "#242526",
      },
  
      {
        element: document.getElementsByClassName(
          "M9sTE  L_LMM  JyscU Tgarh ePUX4 "
        ),
        type: "background",
        color: "#242526",
      },
  
      {
        element: document.getElementsByClassName("_8UZ6e"),
        type: "background",
        color: "#242526",
      },
  
      {
        element: document.getElementsByClassName("Mr508 "),
        type: "color",
        color: "white",
      },
  
      {
        element: document.getElementsByClassName("FPmhX notranslate"),
        type: "color",
        color: "white",
      },
      {
        element: document.getElementsByClassName("zV_Nj"),
        type: "color",
        color: "white",
      },
  
      {
        element: document.getElementsByClassName(
          "sqdOP yWX7d     _8A5w5   ZIAjV "
        ),
        type: "color",
        color: "white",
      },
      {
        element: document.getElementsByClassName("Nm9Fw"),
        type: "color",
        color: "white",
      },
      {
        element: document.getElementsByClassName(
          "_8Rm4L bLWKA M9sTE  L_LMM SgTZ1   ePUX4 "
        ),
        type: ["background", "border-color"],
        color: ["#242526", "#4a4945"],
      },
      {
        element: document.getElementsByClassName("_8Pl3R"),
        type: "color",
        color: "white",
      },
      {
        element: document.getElementsByClassName("_8-yf5 "),
        type: "fill",
        color: "white",
      },
      {
        element: document.getElementsByClassName("SCxLW  o64aR "),
        type: "background",
        color: "#18191a",
      },
      {
        element: document.getElementsByClassName("zGtbP IPQK5 VideM"),
        type: ["background", "border-color"],
        color: ["#242526", "#4a4945"],
      },
      {
        element: document.getElementsByClassName("eebAO  h_uhZ"),
        type: "color",
        color: "white",
      },
  
      {
        element: document.getElementsByClassName("sH9wk  _JgwE "),
        type: "border-top-color",
        color: "#4a4945",
      },
  
      {
        element: document.getElementsByClassName("rhpdm"),
        type: "color",
        color: "white",
      },
  
      {
        element: document.getElementsByClassName("_7UhW9       fKFbl yUEEX   KV-D4              fDxYl"),
        type: "color",
        color: "white",
      },
  
      {
        element: document.getElementsByClassName("fuqBx "),
        type: "background",
        color: "#18191a",
           },
  //weas del perfil
      {
        element: document.getElementsByClassName("-nal3"),
        type: "color",
        color: "#838383",
      },
  
      {
        element: document.getElementsByClassName("g47SY "),
        type: "color",
        color: "#838383",
      },
  
      {
        element: document.getElementsByClassName("PJXu4"),
        type: "color",
        color: "#838383",
      },
  
      {
        element: document.getElementsByClassName("sqdOP L3NKy _8A5w5 ZIAjV"),
        type: "color",
        color: "#838383",
      },
  
      {
        element: document.getElementsByClassName("gmFkV"),
        type: "color",
        color: "#838383",
      },
  
      {
        element: document.getElementsByClassName("_8Rna9  _3Laht pC2e0 "),
        type: "background",
        color: "#242526",
      },
  
  //chat
  
      {
        element: document.getElementsByClassName("oYYFH"),
        type: "background",
        color: "#18191a",
           },
  
      {
        element: document.getElementsByClassName("frMpI  -sxBV"),
        type: "background",
        color: "#18191a",
           },
      {
        element: document.getElementsByClassName("                     Igw0E   rBNOH          YBx95       _4EzTm                                                                                     T9mq-            nGS-Y             "),
        type: "background",
        color: "#18191a",
           },
  
      {
        element: document.getElementsByClassName("S-mcP"),
        type: "background",
        color: "#18191a",
           },
  
      {
        element: document.getElementsByClassName("         DPiy6            Igw0E     IwRSH      eGOV_        vwCYk                                                                                                               "),
        type: "background",
        color: "#18191a",
           },
  
      {
        element: document.getElementsByClassName("-qQT3 rOtsg"),
        type: "background",
        color: "#18191a",
           },
  
      {
        element: document.getElementsByClassName("_7UhW9      x-6xq  yUEEX   KV-D4          uL8Hv     l4b0S    "),
        type: "color",
        color: "white",
           },
  
      {
        element: document.getElementsByClassName("_7UhW9   xLCgt       qyrsm KV-D4              fDxYl     "),
        type: "color",
        color: "white",
           },
  
      {
        element: document.getElementsByClassName("                     Igw0E     IwRSH      eGOV_          ui_ht                                                                          i0EQd                                   "),
        type: "color",
        color: "white",
           },
  
      {
        element: document.getElementsByClassName("                     Igw0E     IwRSH      eGOV_        vwCYk                                        ItkAi                                                                       "),
        type: "color",
        color: "white",
           },
  
      {
        element: document.getElementsByClassName("_7UhW9   xLCgt      MMzan  KV-D4             p1tLr      hjZTB"),
        type: "color",
        color: "white",
           },
  
      {
        element: document.getElementsByClassName("                     Igw0E     IwRSH        YBx95       _4EzTm                                                                                   XfCBB            g6RW6               "),
        type: "background",
        color: "#18191a",
           },
  
     {
       element: document.getElementsByClassName("                     Igw0E     IwRSH      eGOV_        vwCYk                                        ItkAi                                                                       "),
       type: "color",
       color: "white",
       child: 'textarea'
          },
      {
        element: document.getElementsByClassName("Ppjfr UE9AK  wdOqh"),
        type: "background",
        color: "#18191a",
           },
  
      {
        element: document.getElementsByClassName("gElp9 rUo9f  PpGvg "),
        type: "background",
        color: "#18191a",
           },
  
      {
        element: document.getElementsByClassName("XQXOT    pXf-y "),
        type: "background",
        color: "#18191a",
           },
  
      {
        element: document.getElementsByClassName("ltpMr  Slqrh"),
        type: "background",
        color: "#18191a",
           },
  
      {
        element: document.getElementsByClassName("EDfFK ygqzn"),
        type: "background",
        color: "#18191a",
           },
  
      {
        element: document.getElementsByClassName("sH9wk  _JgwE "),
        type: "background",
        color: "#18191a",
           },
  
      {
        element: document.getElementsByClassName("eo2As  "),
        type: "background",
        color: "#18191a",
           },
  
      {
        element: document.getElementsByClassName("C4VMK"),
        type: "color",
        color: "white",
           },
  
      {
        element: document.getElementsByClassName("Ypffh"),
        type: "color",
        color: "white",
           },
  
      {
        element: document.getElementsByClassName("wpO6b  "),
        type: "background",
        color: "#18191a",
           },
        {
        element: document.getElementsByClassName("_7UhW9   xLCgt      MMzan  KV-D4              fDxYl"),
        type: "color",
        color: "#fff",
           },
  
        {
        element: document.getElementsByClassName("_7UhW9   xLCgt       qyrsm KV-D4           se6yk"),
        type: "color",
        color: "#8e8e8e",
           },
        {
        element: document.getElementsByClassName("_7UhW9    vy6Bb      qyrsm KV-D4              fDxYl    T0kll "),
        type: "color",
        color: "#fff",
           },
        {
        element: document.getElementsByClassName("_7UhW9    vy6Bb      qyrsm KV-D4              fDxYl     "),
        type: "color",
        color: "#fff",
           },
  
        {
        element: document.getElementsByClassName("QOqBd                Igw0E     IwRSH      eGOV_         _4EzTm                                                                                                              "),
        type: "background",
        color: " rgb(36, 37, 38)",
           },
    ];
  
    MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
  
    const observer = new MutationObserver(function (mutations, observer) {
      // fired when a mutation occurs
  
      for (let i = 0; i < elements.length; i++) {
        const numberOfKeys = Object.keys(elements[i].element);
        for (let j = 0; j < numberOfKeys.length; j++) {
          if (typeof elements[i].type !== "string") {
  
            let styleString = "";
            for (let k = 0; k < elements[i].type.length; k++) {
              styleString =
                styleString + `${elements[i].type[k]}:${elements[i].color[k]};`;
            }
  
            elements[i].element[j].style = styleString;
          } else {
              if(elements[i].child){
  
                  const child = elements[i].element[j].getElementsByTagName(elements[i].child)
  
  
  
                  if(child[0]){
  
                      child[0].style[elements[i].type] = `${elements[i].color}`
                  }
              } else {
                  elements[i].element[j].style = `${elements[i].type}:${elements[i].color}`;
              }
          }
        }
      }
    });
  
    observer.observe(document, {
      subtree: true,
      attributes: false,
      childList: true,
      characterData: true,
    });
  
    // Your code here...
  })();
  