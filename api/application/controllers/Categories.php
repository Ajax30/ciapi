<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Categories extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
	}

	public function posts($category_id) {
		//load and configure pagination 
		$this->load->library('pagination');
		$config['base_url'] = base_url('/categories/posts/' . $category_id);
		$config['base_url'] = str_replace('/api/', '/', $config['base_url']);
		$config['query_string_segment'] = 'page';
		$config['total_rows'] =	$this->Posts_model->get_num_rows_by_category($category_id);
		$config['per_page'] = 12;
		
		if (!isset($_GET[$config['query_string_segment']]) || $_GET[$config['query_string_segment']] < 1) {
			$_GET[$config['query_string_segment']] = 1;
		}
		
		$limit = $config['per_page'];
		$offset = ($this->input->get($config['query_string_segment']) - 1) * $limit;
		$this->pagination->initialize($config);

		$data = $this->Static_model->get_static_data();
		$data['pagination'] = $this->pagination->create_links();
		$data['pages'] = $this->Pages_model->get_pages();
		$data['categories'] = $this->Categories_model->get_categories();
		$data['category_name'] = $this->Categories_model->get_category($category_id)->name;
		$data['posts'] = $this->Posts_model->get_posts_by_category($category_id, $limit, $offset);

		// All posts in a CATEGORY
		$this->output->set_content_type('application/json')->set_output(json_encode($data,JSON_PRETTY_PRINT));
	}

}