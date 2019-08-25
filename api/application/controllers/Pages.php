<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Pages extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
	}

	public function page($page_id) {
		$data = $this->Static_model->get_static_data();
		$data['pages'] = $this->Pages_model->get_pages();
		$data['categories'] = $this->Categories_model->get_categories();
		$data['posts'] = $this->Posts_model->sidebar_posts($limit=5, $offset=0);
		$data['page'] = $this->Pages_model->get_page($page_id);

		if ($data['categories']) {
			foreach ($data['categories'] as &$category) {
				$category->posts_count = $this->Posts_model->count_posts_in_category($category->id);
			}
		}

		if (!empty($data['page'])) {
				// Overwrite the default tagline with the page title
				$data['tagline'] = $data['page']->title;
			} else {
				$data['tagline'] = "Page not found";
			}
			$this->output->set_content_type('application/json')->set_output(json_encode($data,JSON_PRETTY_PRINT));
	}

}