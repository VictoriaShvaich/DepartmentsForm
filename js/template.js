const templateHtml = `
    <script id="departmentTemplate" type="text/x-handlebars-template">
        {{#if departments.length}}
            <div class="flex-container">
                {{#each departments}}
                    <div class="box-info">
                        <h2>{{name}} (№{{number}})</h2>
                        <p>Менеджер: {{manager}}</p>
                        <p>Телефон: {{phone}}</p>
                        <p>Количество сотрудников: {{employees}}</p>
                        <p>Адрес: {{address}}</p>
                    </div>
                {{/each}}
            </div>
        {{else}}
            <p>Нет данных.</p>
        {{/if}}
    </script>
`;
document.body.insertAdjacentHTML("beforeend", templateHtml);
