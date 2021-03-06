<?php
/**
* @package		EasySocial
* @copyright	Copyright (C) 2010 - 2012 Stack Ideas Sdn Bhd. All rights reserved.
* @license		GNU/GPL, see LICENSE.php
* EasySocial is free software. This version may have been modified pursuant
* to the GNU General Public License, and as distributed it includes or
* is derivative of works licensed under the GNU General Public License or
* other free or open source software licenses.
* See COPYRIGHT.php for copyright notices and details.
*/
defined( '_JEXEC' ) or die( 'Unauthorized Access' );


class FeedsControllerFeeds extends SocialAppsController
{
	/**
	 * Stores a new feed item
	 *
	 * @since	1.0
	 * @access	public
	 */
	public function save()
	{
		// Check for request forgeries.
		Foundry::checkToken();

		// Ensure that the user is logged in.
		Foundry::requireLogin();

		// Get the ajax object.
		$ajax 		= Foundry::ajax();

		// Get current logged in user
		$my 		= Foundry::user();

		// Get app's id.
		$id 		= JRequest::getInt( 'id' );

		// Get feed table
		$feed 		= $this->getTable( 'Feed' );

		// Set the feed props
		$feed->user_id	= $my->id;
		$feed->title 	= JRequest::getVar( 'title' );
		$feed->url 		= JRequest::getVar( 'url' );
		$feed->state 	= SOCIAL_STATE_PUBLISHED;

		$state 		= $feed->store();

		if( !$state )
		{
			return $ajax->reject( $feed->getError() );
		}

		// Create new stream item when a new feed is created
		$feed->createStream( 'create' );

		$theme 	= Foundry::themes();

		$theme->set( 'feed' , $feed );
		$output = $theme->output( 'apps/user/feeds/dashboard/default.item' );

		return $ajax->resolve( $output );
	}

	/**
	 * Deletes a feed item
	 *
	 * @since	1.0
	 * @access	public
	 */
	public function delete()
	{
		// Check for request forgeries.
		Foundry::checkToken();

		// Ensure that the user is logged in.
		Foundry::requireLogin();

		// Get the ajax object.
		$ajax 		= Foundry::ajax();

		// Get current logged in user
		$my 		= Foundry::user();

		// Get app's id.
		$id 		= JRequest::getInt( 'id' );

		// Get feed id.
		$feedId 	= JRequest::getInt( 'feedId' );

		// Get feed table
		$feed 		= $this->getTable( 'Feed' );
		$feed->load( $feedId );

		if( !$feedId || !$feed->id )
		{
			return $ajax->reject( JText::_( 'APP_FEEDS_INVALID_ID_PROVIDED' ) );
		}

		// Ensure that the user is allowed to delete this feed.
		if( $feed->user_id != $my->id )
		{
			return $ajax->reject( JText::_( 'APP_FEEDS_NOT_ALLOWED_TO_DELETE' ) );
		}

		// Try to delete the feed now.
		$state 	= $feed->delete();

		if( !$state )
		{
			return $ajax->reject( $feed->getError() );
		}

		return $ajax->resolve();
	}
}