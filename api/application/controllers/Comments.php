<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Comments extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
	}

	public function create($post_slug){
    $data = json_decode(file_get_contents('php://input'), TRUE);
    $this->Comments_model->create_comment($data);        
	}

}