const prettyMs = require('pretty-ms');

module.exports = {

    makeHtmlHeader(bannerHeader, icone, platform, date, device){

        return '<!DOCTYPE html><html style="box-sizing: inherit;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;overflow-x: '
        +'hidden;font-family: Verdana,sans-serif;font-size: 15px;line-height: 1.5;"><meta name="viewport" content="width=device-width, '
        +'initial-scale=1" style="box-sizing: inherit;"> <body style="box-sizing: inherit;margin: 0;font-family: Verdana,sans-serif;font-size: '
        +'15px;line-height: 1.5;"><img src="'+bannerHeader+'" width="1000" '
        +'height="110" style="box-sizing: inherit;border-style: none;vertical-align: middle;"><div class="w3-container" style="box-sizing: '
        +'inherit;padding: 0.01em 16px;"> <h2 style="box-sizing: inherit;font-size: 30px;font-family: &quot;Segoe UI&quot;,Arial,sans-serif;'
        +'font-weight: 400;margin: 10px 0;">Informações</h2> <p style="box-sizing: inherit;">Informações iniciais da execução dos testes:</p> '
        +'<div class="w3-card-4" style="width: 155px;display: inline-block;box-sizing: inherit;box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2),0 4px '
        +'20px 0 rgba(0,0,0,0.19); border: 1px solid #b7b7c0"> <header class="w3-container w3-blue" style="box-sizing: inherit;display: '
        +'block;padding: 0.01em 16px;color: #fff!important;background-color: #2196F3!important;"> <h4 style="display: inline-block;box-sizing: '
        +'inherit;font-size: 20px;font-family: &quot;Segoe UI&quot;,Arial,sans-serif;font-weight: 400;margin: 10px 0;">Plataforma</h4> </header> '
        +'<div class="w3-container" style="box-sizing: inherit;padding: 0.01em 16px;"> <img src="'+icone+'" width="30" height="30" style="display: '
        +'inline-block;box-sizing: inherit;border-style: none;vertical-align: middle;"> <p style="display: inline-block;font-weight: bold;'
        +'box-sizing: inherit;">'+platform+'</p> </div> </div> <div class="w3-card-4" style="width: 155px;display: inline-block;border: '
        +'1px solid #b7b7c0 !important;box-sizing: inherit;box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2),0 4px 20px 0 rgba(0,0,0,0.19);"> <header '
        +'class="w3-container w3-blue" style="box-sizing: inherit;display: block;padding: 0.01em 16px;color: #fff!important;background-color: '
        +'#2196F3!important;"> <h4 style="display: inline-block;box-sizing: inherit;font-size: 20px;font-family: &quot;Segoe UI&quot;,Arial,'
        +'sans-serif;font-weight: 400;margin: 10px 0;">Device</h4> </header> <div class="w3-container" style="box-sizing: inherit;padding: '
        +'0.01em 16px;"> <img src="https://cdn.icon-icons.com/icons2/936/PNG/512/mobile-phone_icon-icons.com_73484.png" width="30" height="30" '
        +'style="display: inline-block;box-sizing: inherit;border-style: none;vertical-align: middle;"> <p style="display: inline-block;'
        +'font-weight: bold;box-sizing: inherit;">' + device +'</p> </div> </div><div class="w3-card-4" style="width: 350px;display: inline-block;'
        +'box-sizing: '
        +'inherit;box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2),0 4px 20px 0 rgba(0,0,0,0.19);border: 1px solid #b7b7c0"> <header class="w3-container '
        +'w3-blue" style="box-sizing: inherit;display: block;padding: 0.01em 16px;color: #fff!important;background-color: #2196F3!important;"> '
        +'<h4 style="display: inline-block;box-sizing: inherit;font-size: 20px;font-family: &quot;Segoe UI&quot;,Arial,sans-serif;font-weight: '
        +'400;margin: 10px 0;">Data e Hora</h4> </header> <div class="w3-container" style="box-sizing: inherit;padding: 0.01em 16px;"> <img '
        +'src="https://img.icons8.com/metro/1600/clock.png" width="30" height="30" style="display: inline-block;box-sizing: inherit;border-style: '
        +'none;vertical-align: middle;"> <p style="display: inline-block;font-weight: bold;box-sizing: inherit;">'+date+'</p> </div> </div> '
        +'</div><br style="box-sizing: inherit;"><div class="w3-container" style="box-sizing: inherit;padding: 0.01em 16px;"> <h2 '
        +'style="box-sizing: inherit;font-size: 30px;font-family: &quot;Segoe UI&quot;,Arial,sans-serif;font-weight: 400;margin: 10px '
        +'0;">Results</h2></div>';
    },

    makeHtmlFooter(testPassed, testFailed, totalDuration, duration){

        var perSuccsess = percent.calc(testPassed, (testFailed+testPassed), 0);
        var perFail = percent.calc(testFailed, (testFailed+testPassed), 0);

        return '<div class="w3-container" style="box-sizing: inherit;padding: 0.01em 16px;"> <h2 style="box-sizing: inherit;font-size: '
        +'30px;font-family: &quot;Segoe UI&quot;,Arial,sans-serif;font-weight: 400;margin: 10px 0;">Resume</h2> <div align="center" '
        +'class="w3-card-4" style="width: 150px;display: inline-block;box-sizing: inherit;box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2),0 4px 20px '
        +'0 rgba(0,0,0,0.19);border: 1px solid #b7b7c0"> <header class="w3-container w3-blue" style="box-sizing: inherit;display: block;padding: '
        +'0.01em 16px;color: #fff!important;background-color: #2196F3!important;"> <h4 style="display: inline-block;box-sizing: inherit;font-size: '
        +'20px;font-family: &quot;Segoe UI&quot;,Arial,sans-serif;font-weight: 400;margin: 10px 0;">Total</h4> </header> <div class="w3-container" '
        +'style="box-sizing: inherit;padding: 0.01em 16px;"> <p style="display: inline-block;font-weight: bold;box-sizing: '
        +'inherit;">'+(testFailed+testPassed)+'</p> </div> </div> <div align="center" class="w3-card-4" style="width: 150px;display: '
        +'inline-block;box-sizing: inherit;box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2),0 4px 20px 0 rgba(0,0,0,0.19);border: 1px solid #b7b7c0"> '
        +'<header class="w3-container w3-green" style="box-sizing: inherit;display: block;padding: 0.01em 16px;color: #fff!important;'
        +'background-color: #4CAF50!important;"> <h4 style="display: inline-block;box-sizing: inherit;font-size: 20px;font-family: &quot;Segoe '
        +'UI&quot;,Arial,sans-serif;font-weight: 400;margin: 10px 0;">Success</h4> </header> <div class="w3-container" style="box-sizing: '
        +'inherit;padding: 0.01em 16px;"> <p style="display: inline-block;font-weight: bold;box-sizing: inherit;">'+testPassed+'</p> </div> '
        +'</div> <div align="center" class="w3-card-4" style="width: 150px;display: inline-block;box-sizing: inherit;box-shadow: 0 4px 10px 0 '
        +'rgba(0,0,0,0.2),0 4px 20px 0 rgba(0,0,0,0.19);border: 1px solid #b7b7c0"> <header class="w3-container w3-red" style="box-sizing: '
        +'inherit;display: block;padding: 0.01em 16px;color: #fff!important;background-color: #f44336!important;"> <h4 style="display: '
        +'inline-block;box-sizing: inherit;font-size: 20px;font-family: &quot;Segoe UI&quot;,Arial,sans-serif;font-weight: 400;margin: '
        +'10px 0;">Fail</h4> </header> <div class="w3-container" style="box-sizing: inherit;padding: 0.01em 16px;"> <p style="display: '
        +'inline-block;font-weight: bold;box-sizing: inherit;">'+testFailed+'</p> </div> </div> <div align="center" class="w3-card-4" '
        +'style="width: 250px;display: inline-block;box-sizing: inherit;box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2),0 4px 20px 0 rgba(0,0,0,0.19);'
        +'border: 1px solid #b7b7c0"> <header class="w3-container w3-blue" style="box-sizing: inherit;display: block;padding: 0.01em '
        +'16px;color: #fff!important;background-color: #2196F3!important;"> <h4 style="display: inline-block;box-sizing: inherit;font-size: '
        +'20px;font-family: &quot;Segoe UI&quot;,Arial,sans-serif;font-weight: 400;margin: 10px 0;">Total Time</h4> </header> '
        +'<div class="w3-container" style="box-sizing: inherit;padding: 0.01em 16px;"> <p style="display: inline-block;font-weight: '
        +'bold;box-sizing: inherit;">'+prettyMs(totalDuration, {verbose: true})+'</p> </div> </div><div align="center" class="w3-card-4" '
        +'style="width: 250px;display: inline-block;border: 1px solid #b7b7c0;box-sizing: inherit;box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2),0 '
        +'4px 20px 0 rgba(0,0,0,0.19);"> <header class="w3-container w3-blue" style="box-sizing: inherit;display: block;padding: 0.01em '
        +'16px;color: #fff!important;background-color: #2196F3!important;"> <h4 style="display: inline-block;box-sizing: inherit;font-size: '
        +'20px;font-family: &quot;Segoe UI&quot;,Arial,sans-serif;font-weight: 400;margin: 10px 0;">Tests Time</h4> </header> '
        +'<div class="w3-container" style="box-sizing: inherit;padding: 0.01em 16px;"> <p style="display: inline-block;font-weight: '
        +'bold;box-sizing: inherit;">'+prettyMs(duration, {verbose: true})+'</p> </div> </div></div><br '
        +'style="box-sizing: inherit;">'
 
        //statistic
        +'<div class="w3-container" style="box-sizing: inherit;padding: 0.01em 16px;"> '

        +'<h2 style="box-sizing: inherit;font-size: '
        +'30px;font-family: &quot;Segoe UI&quot;,Arial,sans-serif;font-weight: 400;margin: 10px 0;">Statistic</h2>'

        +'<p style="box-sizing:border-box;">Success</p> '

        +'<div class="container" style="box-sizing:border-box;width:1000px;background-color:'
        +'#ddd;"> <div class="skills success" style="box-sizing:border-box;text-align:right;padding:10px;color:white;width:'+perSuccsess+'%;'
        +'background-color:#4CAF50;">'+perSuccsess+'%</div> </div> '
        
        +'<p style="box-sizing:border-box;">Fail</p> '
        
        +'<div class="container" style="box-sizing:border-box;width:1000px;background-color:#ddd;"> '
        +'<div class="skills fail" style="box-sizing:border-box;text-align:right;padding:10px;color:white;width:'
        +perFail+'%;background-color:#f44336;">'+perFail+'%</div> </div> '
        +'<br style="box-sizing: inherit;"><br style="box-sizing: inherit;">'
        
        +'</div>'
        //statistic
        
        +'<img src="https://uploaddeimagens.com.br/images/001/849/204/original/AT-foot2.jpeg?1548162426" '
        +'width="1000" height="60" style="box-sizing: inherit;border-style: none;vertical-align: middle;">'
        +'</body></html>'
    },


    makeHtmlTestFail(title, err){

        return '<div class="w3-container" style="box-sizing: inherit;padding: 0.01em 16px;"><div class="w3-panel w3-leftbar w3-border-red '
        +'w3-pale-red" style="box-sizing: inherit;padding: 0.01em 16px;margin-top: 16px;margin-bottom: 16px;border-left: 6px solid '
        +'#ccc!important;color: #000!important;background-color: #ffdddd!important;border-color: #f44336!important;"> <p style="display: '
        +'inline-block;box-sizing: inherit;">'+ title+'</p> <p align="left" style="font-weight: bold;box-sizing: inherit;">Error: '
        +'<i style="box-sizing: inherit;">'+err+'</i></p> </div> </div>';
    },

    makeHtmlTestSuccess(title){

        return '<div class="w3-container" style="box-sizing: inherit;padding: 0.01em 16px;"><div class="w3-panel w3-leftbar '
        +'w3-border-green w3-pale-green" style="box-sizing: inherit;padding: 0.01em 16px;margin-top: 16px;margin-bottom: 16px;border-left: '
        +'6px solid #ccc!important;color: #000!important;background-color: #ddffdd!important;border-color: #4CAF50!important;"> '
        +'<p style="display: inline-block;box-sizing: inherit;">'+title+'</p> </div> </div>';
    },

    makeHtmlFeature(suite){

        return '<div class="w3-panel w3-topbar w3-bottombar w3-border-blue w3-pale-blue" style="box-sizing:inherit;padding-top:'
        +'0.01em;padding-bottom:0.01em;padding-right:16px;padding-left:16px;margin-top:16px;margin-bottom:16px;border-top-width:6px '
        +'!important;border-top-style:solid !important;border-top-color:#ccc !important;border-bottom-width:6px !important;border-bottom-style:'
        +'solid !important;border-bottom-color:#ccc !important;color:#000!important;background-color:#ddffff!important;border-color:#2196F3'
        +'!important;" > <p style="box-sizing:inherit;font-weight:bold;" >'+ suite+'</p></div>';
    },

}