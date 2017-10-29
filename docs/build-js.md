# Javascript `build:js` task

The main script is at `src/js/index.js`. Use `ES2015` and `ES6` to import your module components. At `js/core/component.js` you will find a basic component which can be extended. 

For an `AJAX` requests added `X-Csrf-Token` meta tokens which should authenticate with backend system. Add script to your `Page` class:

```php
    /**
     * @return String
     */
    public function getSecurityToken()
    {
        return SecurityToken::create('X-Csrf-Token')->getValue();
    }
    
    /**
     * @param bool $includeTitle
     *
     * @return string
     */
    public function MetaTags($includeTitle = true)
    {
        $tags = parent::MetaTags($includeTitle);
        $token = $this->getSecurityToken();
        $tags .= "<meta name=\"X-Csrf-Token\" content=\"{$token}\" />\n";

        return $tags;
    }
```

So later when `AJAX` requests for an example call `this.ajax.get('url-segment/someAction')`, so in the backend to allowed requests you need pass a security tokens:

```php
    // and example of Page_Controller

    private static $allowed_actions = [
        'someAction' => '->canAccess'
    ];
    
    /**
     * Can access my api? Yes if you have X-Csrf-Token requested
     * and is valid.
     *
     * @return bool
     */
    public function canAccess()
    {
        $headerToken = $this->getRequest()->getHeader('X-Csrf-Token');
        $currentToken = SecurityToken::create('X-Csrf-Token')->getValue();

        return $headerToken && $headerToken == $currentToken;
    }
    
    /**
     * Return an array of JSON string within data and
     * only accessible when @canAccess is true.
     *
     * @return string
     */
    public function someAction()
    {
        return Convert::array2json(['data' => 'example']);
    }
```

## Production

For live environment recommend to uncomment `configs/tasks/webpack.config.js` those lines:

```js
    plugins: [
        // uncomment those lines for production
        new webpack.optimize.UglifyJsPlugin({
            compress: {warnings: false},
            comments: false,
            minimize: false
        }),
        new webpack.optimize.AggressiveMergingPlugin()
    ]
```

This are a plugins to minify javascript code and replace variables into more shortened.