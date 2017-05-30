<head>
    <% base_tag %>
    <meta charset="utf-8">
    <title>$SiteConfig.Title<% if $Title && $ClassName != 'HomePage' %> &mdash; $Title<% end_if %></title>
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    $MetaTags(false)

    <%--<link rel="apple-touch-icon" sizes="180x180" href="$ThemeDir/favicons/apple-touch-icon-180x180.png?v=1481025012">--%>
    <%--<link rel="icon" type="image/png" href="$ThemeDir/favicons/favicon-32x32.png?v=1481025012" sizes="32x32">--%>
    <%--<link rel="icon" type="image/png" href="$ThemeDir/favicons/favicon-16x16.png?v=1481025012" sizes="16x16">--%>
    <%--<link rel="manifest" href="$ThemeDir/favicons/manifest.json?v=1481025012">--%>
    <%--<link rel="mask-icon" href="$ThemeDir/favicons/safari-pinned-tab.svg?v=1481025012" color="#3eabb8">--%>
    <%--<link rel="shortcut icon" href="$ThemeDir/favicons/favicon.ico?v=1481025012">--%>
    <%--<meta name="msapplication-config" content="$ThemeDir/favicons/browserconfig.xml?v=1481025012">--%>
    <%--<meta name="theme-color" content="#3eabb8">--%>
</head>