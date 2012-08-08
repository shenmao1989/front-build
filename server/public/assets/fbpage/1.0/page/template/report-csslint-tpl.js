KISSY.add(function(){
    return {"html":"<div class=\"csslint-list\">\n    {{#if lintReport&&lintReport.length}}\n        {{#each lintReport as item}}\n            <div class='csslint-list-item'>\n                <h4 class='csslint-file'>{{item.file}}</h4>\n                <p>{{item.fullpath}}</p>\n                <pre>{{item.output}}</pre>\n            </div>\n        {{/each}}\n    {{#else}}\n        没有CSS文件\n    {{/if}}\n</div>\n"};
});