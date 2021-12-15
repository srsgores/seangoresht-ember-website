import Controller from "@ember/controller";

export default class PhotographyController extends Controller {
	photos = [
		{
			path: "nature/berries.jpg",
			name: "Berries"
		},
		{
			path: "nature/bird-red.jpg",
			name: "Red Bird"
		},
		{
			path: "nature/bird1.jpg",
			name: "American House Finch"
		},
		{
			path: "nature/budding-lilac.jpg",
			name: "Budding Lilac"
		}
	]
}
