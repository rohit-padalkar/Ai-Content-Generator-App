"use client"
import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import TemplateListSection from './_components/TemplateListSection'
import Header from './_components/Header'

function dashboard() {

  const [userSearchInput, setUserSearchInput] = useState<string>();
  return (
    <div>
       {/* Search Section */}
       <SearchSection onSearchInput={(value:string)=>setUserSearchInput(value)}/>
       {/* Template List Section */}
       <TemplateListSection userSearchInput={userSearchInput}/>
    </div>
  )
}

export default dashboard
