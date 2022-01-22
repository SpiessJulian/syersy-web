module.exports = {
	
	entry: './appReact/main.js',
	output: {
		path: __dirname + '/Public',
				filename: 'bundle.js'
	},

	
	module:{
		rules: [
			{
				use: 'babel-loader',
				test: /\.js$/,
				exclude: /node_modules/
			},

			{
        		test: /\.css$/,
        		use: [ 'style-loader', 'css-loader' ]
      		},
      		{
			  test: /\.(png|jpg|jpeg)$/,
			  loader: 'url-loader'
			}
 


		]
	}

};

