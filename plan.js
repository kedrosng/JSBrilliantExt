// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


var PlanDownloader = (function() {
    
    var i;
    var theSnippedURL = location.href.match(/([0-9]|[a-f]){32}/g);
     if(window.location.href.indexOf("inspectionPlan?imageId") > -1)
		{window.open('https://bravo.bd.gov.hk/getInspectionPlanImage?imageId='+theSnippedURL);
	    setTimeout(window.close(),5000);}
			else
				{if(window.location.href.indexOf("inspectionDocument") > -1)
				{feed = confirm("Download Report?");
					if( feed === false)
					{prompt("URL:",'https://bravo.bd.gov.hk/getInspectionDocumentImage?imageId='+theSnippedURL+'&pageNo=*');}
					else
						{var x = prompt("How many pages?","Please input numbers");
						for(i = 1; i <= parseInt(x); i++)
						{window.open('https://bravo.bd.gov.hk/getInspectionDocumentImage?imageId='+theSnippedURL+'&pageNo='+i);
						setTimeout(window.close(),5000);}
						confirm("Download"+ x + "Pages Completed, Please Wait Until All Tab CLosed.");
	      }}
	      else
	      {}
	    }
    })();