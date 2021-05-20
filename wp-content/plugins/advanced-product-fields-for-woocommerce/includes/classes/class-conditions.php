<?php

namespace SW_WAPF\Includes\Classes {


    use SW_WAPF\Includes\Models\ConditionRuleGroup;
    use SW_WAPF\Includes\Models\FieldGroup;

    class Conditions
    {
        public static function get_field_visibility_conditions() {

            $options = array(
                array(
                    'type'          => 'text',
                    'conditions'    => array(
                        array('value' => 'empty', 'label' => __('Value is empty','advanced-product-fields-for-woocommerce'), 'type' => false),
                        array('value' => '!empty', 'label' => __('Value is any value','advanced-product-fields-for-woocommerce'), 'type' => false),
                        array('value' => '==', 'label' => __('Value is equal to','advanced-product-fields-for-woocommerce'), 'type' => 'text'),
                        array('value' => '!=', 'label' => __('Value is not equal to','advanced-product-fields-for-woocommerce'), 'type' => 'text'),
                        array('value' => '==contains', 'label' => __('Value contains (Pro only)','advanced-product-fields-for-woocommerce'), 'type' => 'text', 'pro' => true),
                    )
                ),
                array(
                    'type'          => 'email',
                    'conditions'    => array(
                        array('value' => 'empty', 'label' => __('Value is empty','advanced-product-fields-for-woocommerce'), 'type' => false),
                        array('value' => '!empty', 'label' => __('Value is any value','advanced-product-fields-for-woocommerce'), 'type' => false),
                        array('value' => '==', 'label' => __('Value is equal to','advanced-product-fields-for-woocommerce'), 'type' => 'text'),
                        array('value' => '!=', 'label' => __('Value is not equal to','advanced-product-fields-for-woocommerce'), 'type' => 'text'),
                        array('value' => '==contains', 'label' => __('Value contains (Pro only)','advanced-product-fields-for-woocommerce'), 'type' => 'text', 'pro' => true),
                    )
                ),
                array(
                    'type'          => 'url',
                    'conditions'    => array(
                        array('value' => 'empty', 'label' => __('Value is empty','advanced-product-fields-for-woocommerce'), 'type' => false),
                        array('value' => '!empty', 'label' => __('Value is any value','advanced-product-fields-for-woocommerce'), 'type' => false),
                        array('value' => '==', 'label' => __('Value is equal to','advanced-product-fields-for-woocommerce'), 'type' => 'text'),
                        array('value' => '!=', 'label' => __('Value is not equal to','advanced-product-fields-for-woocommerce'), 'type' => 'text'),
                        array('value' => '==contains', 'label' => __('Value contains (Pro only)','advanced-product-fields-for-woocommerce'), 'type' => 'text', 'pro' => true),
                    )
                ),
                array(
                    'type'          => 'number',
                    'conditions'    => array(
                        array('value' => 'empty', 'label' => __('Value is empty','advanced-product-fields-for-woocommerce'), 'type' => false),
                        array('value' => '!empty', 'label' => __('Value is any value','advanced-product-fields-for-woocommerce'), 'type' => false),
                        array('value' => '==', 'label' => __('Value is equal to','advanced-product-fields-for-woocommerce'), 'type' => 'text'),
                        array('value' => '!=', 'label' => __('Value is not equal to','advanced-product-fields-for-woocommerce'), 'type' => 'text'),
                        array('value' => 'gt', 'label' => __('Value is greater than','advanced-product-fields-for-woocommerce'), 'type' => 'number'),
                        array('value' => 'lt', 'label' => __('Value is lesser than','advanced-product-fields-for-woocommerce'), 'type' => 'number'),
                        array('value' => '==contains', 'label' => __('Value contains (Pro only)','advanced-product-fields-for-woocommerce'), 'type' => 'text', 'pro' => true),
                    )
                ),
                array(
                    'type'          => 'textarea',
                    'conditions'    => array(
                        array('value' => 'empty', 'label' => __('Value is empty','advanced-product-fields-for-woocommerce'), 'type' => false),
                        array('value' => '!empty', 'label' => __('Value is any value','advanced-product-fields-for-woocommerce'), 'type' => false),
                        array('value' => '==', 'label' => __('Value is equal to','advanced-product-fields-for-woocommerce'), 'type' => 'text'),
                        array('value' => '!=', 'label' => __('Value is not equal to','advanced-product-fields-for-woocommerce'), 'type' => 'text'),
                        array('value' => '==contains', 'label' => __('Value contains (Pro only)','advanced-product-fields-for-woocommerce'), 'type' => 'text', 'pro' => true),
                    )
                ), array(
                    'type'          => 'true-false',
                    'conditions'    => array(
                        array('value' => 'check', 'label' => __('Is checked', 'advanced-product-fields-for-woocommerce'), 'type' => false),
                        array('value' => '!check', 'label' => __('Is not checked', 'advanced-product-fields-for-woocommerce'), 'type' => false)
                    )
                ), array(
                    'type'          => 'select',
                    'conditions'    => array(
                        array('value' => 'empty', 'label' => __('Value is empty','advanced-product-fields-for-woocommerce'), 'type' => false),
                        array('value' => '!empty', 'label' => __('Value is any value','advanced-product-fields-for-woocommerce'), 'type' => false),
                        array('value' => '==', 'label' => __('Value is equal to','advanced-product-fields-for-woocommerce'), 'type' => 'options'),
                        array('value' => '!=', 'label' => __('Value is not equal to','advanced-product-fields-for-woocommerce'), 'type' => 'options'),
                    )
                ), array(
                    'type'          => 'checkboxes',
                    'conditions'    => array(
                        array('value' => 'empty', 'label' => __('Value is empty','advanced-product-fields-for-woocommerce'), 'type' => false),
                        array('value' => '!empty', 'label' => __('Value is any value','advanced-product-fields-for-woocommerce'), 'type' => false),
                        array('value' => '==', 'label' => __('Value is equal to','advanced-product-fields-for-woocommerce'), 'type' => 'options'),
                        array('value' => '!=', 'label' => __('Value is not equal to','advanced-product-fields-for-woocommerce'), 'type' => 'options'),
                    )
                ), array(
                    'type'          => 'radio',
                    'conditions'    => array(
                        array('value' => 'empty', 'label' => __('Value is empty','advanced-product-fields-for-woocommerce'), 'type' => false),
                        array('value' => '!empty', 'label' => __('Value is any value','advanced-product-fields-for-woocommerce'), 'type' => false),
                        array('value' => '==', 'label' => __('Value is equal to','advanced-product-fields-for-woocommerce'), 'type' => 'options'),
                        array('value' => '!=', 'label' => __('Value is not equal to','advanced-product-fields-for-woocommerce'), 'type' => 'options'),
                    )
                ),
            );

           return $options;

        }

        public static function get_fieldgroup_visibility_conditions() {

            $product_options = array(

                array(
                    'group'                 => __('User','advanced-product-fields-for-woocommerce'),
                    'children'              => array(
                        array(
                            'id'            => 'auth',
                            'label'         => __('Authentication','advanced-product-fields-for-woocommerce'),
                            'conditions'    => array(
                                array(
                                    'id'    => 'auth',
                                    'label' => __('Logged in', 'advanced-product-fields-for-woocommerce'),
                                    'value' => array()
                                ), array(
                                    'id'    => '!auth',
                                    'label' => __('Not logged in', 'advanced-product-fields-for-woocommerce'),
                                    'value' => array()
                                )
                            )
                        ),array(
                            'id'            => 'role',
                            'label'         => __('User role','advanced-product-fields-for-woocommerce'),
                            'pro'           => true,
                            'conditions'    => array(
                            )
                        )
                    )
                ),
                array(
                    'group'                 => __('Product', 'advanced-product-fields-for-woocommerce'),
                    'children'              => array(
                        array(
                            'id'            => 'product',
                            'label'         => __('Product', 'advanced-product-fields-for-woocommerce'),
                            'conditions'    => array(
                                array(
                                    'id'    => 'product',
                                    'label' => __('Is equal to','advanced-product-fields-for-woocommerce'),
                                    'value' => array(
                                        'type'          => 'select2',
                                        'placeholder'   => __("Search a product...",'advanced-product-fields-for-woocommerce'),
                                        'action'        => 'wapf_search_products',
                                        'single'        => true
                                    )
                                ),
                                array(
                                    'id'    => '!product',
                                    'label' => __('Is not equal to','advanced-product-fields-for-woocommerce'),
                                    'value' => array(
                                        'type'          => 'select2',
                                        'placeholder'   => __("Search a product...",'advanced-product-fields-for-woocommerce'),
                                        'action'        => 'wapf_search_products',
                                        'single'        => true
                                    )
                                ),
                                array(
                                    'id'    => 'products',
                                    'label' => __('In list','advanced-product-fields-for-woocommerce'),
                                    'value' => array(
                                        'type'          => 'select2',
                                        'placeholder'   => __("Search a product...",'advanced-product-fields-for-woocommerce'),
                                        'action'        => 'wapf_search_products',
                                    )
                                ),
                                array(
                                    'id'    => '!products',
                                    'label' => __('Not in list','advanced-product-fields-for-woocommerce'),
                                    'value' => array(
                                        'type'          => 'select2',
                                        'placeholder'   => __("Search a product...",'advanced-product-fields-for-woocommerce'),
                                        'action'        => 'wapf_search_products',
                                    )
                                ),

                            )
                        ), array(
                            'id'            => 'product_variation',
                            'label'         => __('Product variation', 'advanced-product-fields-for-woocommerce'),
                            'pro'           => true,
                            'conditions'    => array()
                        ),
                         array(
	                         'id'            => 'var_attr',
	                         'label'         => __('Product attribute', 'advanced-product-fields-for-woocommerce'),
	                         'pro'           => true,
	                         'conditions'    => array()
                         ), array(
                            'id'            => 'product_cat',
                            'label'         => __('Product category', 'advanced-product-fields-for-woocommerce'),
                            'pro'           => true,
                            'conditions'    => array()
                        ),
	                    array(
		                    'id'            => 'ptag',
		                    'label'         => __('Product tag', 'advanced-product-fields-for-woocommerce'),
		                    'pro'           => true,
		                    'conditions'    => array()
	                    ),
                        array(
                            'id'            => 'product_type',
                            'label'         => __('Product type', 'advanced-product-fields-for-woocommerce'),
                            'pro'           => true,
                            'conditions'    => array()
                        )

                    )
                )
            );

            $product_options = apply_filters('wapf/condition_options_products', $product_options);

            return array('wapf_product' => $product_options);
        }

        public static function is_field_group_valid(FieldGroup $field_group)
        {

            if(empty($field_group->rules_groups))
                return true;

            foreach ($field_group->rules_groups as $rule_group) {
                if(self::is_rule_group_valid($rule_group))
                    return true;
            }

            return false;

        }

        public static function is_field_group_valid_for_product(FieldGroup $field_group, $product)
        {
            if(empty($field_group->rules_groups))
                return true;

            foreach ($field_group->rules_groups as $rule_group) {
                if(self::is_rule_group_valid($rule_group, $product))
                    return true;
            }
            return false;
        }

        public static function is_rule_group_valid(ConditionRuleGroup $group, $product = null) {

            if(empty($group->rules))
                return true;

            foreach ($group->rules as $rule) {

                $value = $rule->value;

                if(is_array($value) && count($value) > 0 && isset($value[0]['text']))
                    $value = Enumerable::from($value)->select(function($x) {
                        return $x['id'];
                    })->toArray();

                if(!Conditions::check($rule->condition,$value,$product))
                    return false;

            }

            return true;

        }

        private static function check($condition, $value, $product = null)
        {

            switch ($condition) {
                case 'auth':
                    return is_user_logged_in() === true;
                case '!auth':
                    return is_user_logged_in() === false;
            }


            $product = empty($product) ? $GLOBALS['product'] : $product;

            switch ($condition) {
                case 'product':
                case 'products':
                    return self::is_current_product($product, (array)$value) === true;
                case '!product':
                case '!products':
                    return self::is_current_product($product,(array)$value) === false;
            }

            return false;

        }

        private static function is_current_product($product, $product_ids = array()) {

            if(empty($product_ids))
                return false;

            return in_array($product->get_id(),$product_ids, false);

        }

    }
}