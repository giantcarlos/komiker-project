import React from 'react'
import { Link } from 'react-router-dom'

function PublisherCard({ publisher }) {
  return (
    <div>
        <Link to={`/publishers/${publisher.id}`}>{publisher.name}</Link>
    </div>
  )
}

export default PublisherCard