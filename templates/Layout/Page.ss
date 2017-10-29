<div class="container">
    <article>
        <% if $Title %><h1>$Title</h1><% end_if %>

        <div class="content">
            $Content
        </div>
    </article>
    $Form
</div>

<%-- this will load React Component --%>
<div data-component="hello"></div>