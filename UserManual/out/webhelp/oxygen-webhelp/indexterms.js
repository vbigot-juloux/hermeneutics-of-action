var indexTerms = ' <ul id="indexList"> <li> <div> <a href="ObjVar.html" target="contentwin"> Verbal semantic </a> <a href="ObjVar.html" target="contentwin"> [1] </a> </div> </li> </ul> '; $("#indexBlock #iList").html(indexTerms); $('#indexList li a').each(function() { var old = $(this).attr('href'); if (withFrames) { $(this).attr('href', normalizeLink(old)); } else { $(this).attr('href', '#' + normalizeLink(old)); $(this).removeAttr("target"); } });