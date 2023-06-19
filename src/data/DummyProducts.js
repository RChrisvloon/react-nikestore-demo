// Default Products
const DUMMY_PRODUCTS = [
	{
    id: 1,
		title: "Nike Air Force 1'07",
		description: "Women's Shoes",
		price: 119.99,
		img_url:
			'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2fc724c9-79bd-4ab5-8d38-4e5dd794e689/air-force-1-07-damesschoen-QxRXZV.png',
		sub_images: [
			'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f2989221-782d-452d-becd-b969e677a241/air-force-1-07-damesschoen-QxRXZV.png',
			'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a606cb8e-205f-4a7a-9b95-23810ea11ff9/air-force-1-07-damesschoen-QxRXZV.png',
			'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/bdb17107-fcff-4287-b42c-814e60ad6185/air-force-1-07-damesschoen-QxRXZV.png',
			'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/50bb3683-db6c-4ab2-aae7-f74a27e0e871/air-force-1-07-damesschoen-QxRXZV.png',
			'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/91429185-f13a-418b-98cc-97248926591e/air-force-1-07-damesschoen-QxRXZV.png',
			'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/803eb59f-b82e-467f-926b-3a9cba4be3da/air-force-1-07-damesschoen-QxRXZV.png',
			'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/80f8953b-f039-4c33-9fb3-9d02241d6ad9/air-force-1-07-damesschoen-QxRXZV.png',
		],
    discountedPrice: null,
    discountPercentage: null
	},
	{
    id: 2,
		title: 'Nike Invincible 3',
		description: "Men's Road Running Shoes",
		price: 179.99,
		img_url:
			'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/268e5f54-aee3-4c21-a7df-fa8c2067694a/invincible-3-mens-road-running-shoes-Xrd0px.png',
		sub_images: [
			'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/96d63f4b-b42a-4de4-bd12-0fbdc5ecf81c/invincible-3-mens-road-running-shoes-Xrd0px.png',
			'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3f4571b9-bbb9-4343-96d3-6467cb217bff/invincible-3-mens-road-running-shoes-Xrd0px.png',
			'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/242ee0f1-018e-43d2-96fb-18600929a290/invincible-3-mens-road-running-shoes-Xrd0px.png',
			'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1f9150ef-b090-4e50-9135-d764a1a09c5c/invincible-3-mens-road-running-shoes-Xrd0px.png',
			'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/48ca0324-63c5-4611-ad3e-e18a7747697e/invincible-3-mens-road-running-shoes-Xrd0px.png',
			'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/deb84a7a-d668-44f9-91dc-205222a622dd/invincible-3-mens-road-running-shoes-Xrd0px.png',
			'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4dc089a7-f603-41da-9a54-7259c102ded6/invincible-3-mens-road-running-shoes-Xrd0px.png',
		],
    discountedPrice: null,
    discountPercentage: null
	},
	{
    id: 3,
		title: 'Nike Air Max Pulse',
		description: "Men's Shoes",
		price: 149.99,
		img_url:
			'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2e282edb-e916-48cb-8329-97497507ab19/air-max-pulse-mens-shoes-ShS3tL.png',
		sub_images: [
			'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8ed4442c-cf60-497f-94f5-75f7b1cc29a8/air-max-pulse-mens-shoes-ShS3tL.png',
			'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2df3cb7d-c106-4622-b5da-e77264e5ded6/air-max-pulse-mens-shoes-ShS3tL.png',
			'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cf83065f-6809-4b29-93c4-adad630aa5d7/air-max-pulse-mens-shoes-ShS3tL.png',
			'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4095f1dc-33b6-48ad-901e-4d0e10bc8d65/air-max-pulse-mens-shoes-ShS3tL.png',
			'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/10770ee0-a70d-4798-8a0d-d3bab365bbaf/air-max-pulse-mens-shoes-ShS3tL.png',
			'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6a92593c-95c9-4297-8518-2ca8cbe6a9b5/air-max-pulse-mens-shoes-ShS3tL.png',
			'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/708a8508-d960-4065-9e24-ffab83328e78/air-max-pulse-mens-shoes-ShS3tL.png',
		],
    discountedPrice: null,
    discountPercentage: null
	},
	{
    id: 4,
		title: 'Nike Air Zoom Flight 95',
		description: "Men's Shoes",
		price: 159.99,
		img_url:
			'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e4e6d2f0-eb1b-4689-8a55-a7e5bb52fe3b/air-zoom-flight-95-mens-shoes-zc42bP.png',
		sub_images: [
			'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1a87580c-db92-4dfc-b656-e466d17b080d/air-zoom-flight-95-mens-shoes-zc42bP.png',
			'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/132f93d4-6025-492e-a384-248f70a6cce5/air-zoom-flight-95-mens-shoes-zc42bP.png',
			'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/316473fa-ca73-4770-9667-938d10ad82f5/air-zoom-flight-95-mens-shoes-zc42bP.png',
			'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0e1b4b95-213e-4d3d-8934-7b26c1aaf0fa/air-zoom-flight-95-mens-shoes-zc42bP.png',
			'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ed8339cf-947d-45f0-b49b-5edee9ef788f/air-zoom-flight-95-mens-shoes-zc42bP.png',
			'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f14f8996-99a7-45e1-9c43-258ab82f27ac/air-zoom-flight-95-mens-shoes-zc42bP.png',
			'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1f32cee0-c3a7-4d1a-888d-6eda69bf43af/air-zoom-flight-95-mens-shoes-zc42bP.png',
		],
    discountedPrice: 127.99,
    discountPercentage: 20
	},
	{
    id: 5,
		title: "Nike Air Force 1 '07",
		description: "Men's Shoes",
		price: 109.99,
		img_url:
			'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e6da41fa-1be4-4ce5-b89c-22be4f1f02d4/air-force-1-07-mens-shoes-5QFp5Z.png',
		sub_images: [
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/00375837-849f-4f17-ba24-d201d27be49b/air-force-1-07-mens-shoes-jBrhbr.png',
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3cc96f43-47b6-43cb-951d-d8f73bb2f912/air-force-1-07-mens-shoes-jBrhbr.png',
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/33533fe2-1157-4001-896e-1803b30659c8/air-force-1-07-mens-shoes-jBrhbr.png',
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a0a300da-2e16-4483-ba64-9815cf0598ac/air-force-1-07-mens-shoes-jBrhbr.png',
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/82aa97ed-98bf-4b6f-9d0b-31a9f907077b/air-force-1-07-mens-shoes-jBrhbr.png',
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/120a31b0-efa7-41c7-9a84-87b1e56ab9c3/air-force-1-07-mens-shoes-jBrhbr.png',
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1c1e5f55-99c2-4522-b398-2352e01ba566/air-force-1-07-mens-shoes-jBrhbr.png',
    ],
    discountedPrice: 108.79,
    discountPercentage: 15
	},
  {
    id: 6,
		title: 'Nike Pegasus 40',
		description: "Men's Road Running Shoes",
		price: 129.99,
		img_url:
			'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1c887b49-b5fe-4c6a-97b1-9a30f7cd8e29/pegasus-40-mens-road-running-shoes-h3bxQl.png',
		sub_images: [
			'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/acf64239-0b0c-4298-9f7c-f8c01ef95c85/pegasus-40-mens-road-running-shoes-h3bxQl.png',
			'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5ef19b8a-328c-4343-958c-d83c1b732f2c/pegasus-40-mens-road-running-shoes-h3bxQl.png',
			'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/422dc1e8-4345-4f23-b94a-79374f6c3954/pegasus-40-mens-road-running-shoes-h3bxQl.png',
			'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/65ac2d02-9813-46f5-97a2-9923207ddd11/pegasus-40-mens-road-running-shoes-h3bxQl.png',
			'https://static.nike.com/a/images/t_default/02f2af27-7419-44f2-a52e-13fc35bc4f7e/pegasus-40-mens-road-running-shoes-h3bxQl.png',
			'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8d2a1c76-9bb8-4b3d-9b70-4d19bcbcf11e/pegasus-40-mens-road-running-shoes-h3bxQl.png',
			'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ce8a3533-3b43-4769-ac2e-4a00ebf36511/pegasus-40-mens-road-running-shoes-h3bxQl.png',
		],
    discountedPrice: 97.49,
    discountPercentage: 25
	},
];

export default DUMMY_PRODUCTS;