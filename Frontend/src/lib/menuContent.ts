type MenuItem = {
	name: string;
	location: string;
	children?: MenuItem[];
};

const menu: MenuItem[] = [
	{
		name: 'Art',
		location: '/Art',
		children: [
			{
				name: 'Photos',
				location: '/Art/Photos'
			},
			{
				name: 'Paintings',
				location: '/Art/Paintings'
			}
		]
	},
	{
		name: 'Talking-points',
		location: '/Talking-points',
		children: [
			{
				name: 'Books',
				location: '/Talking-points/Books'
			}
		]
	}
];

export default menu;
