import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const build = {
  hidden:{
      y: "100px",
      opacity: 0
  },
  visible:{
      y:"200px",
      opacity: 1,
      transition: {delay: 0.5}
  },
} 


const BuildApp = ({open,onClose}) => {
  if(!open) return null
  return (
    <AnimatePresence>
        <motion.div class="build" id="build"
        variants={build}
        initial="hidden"
        animate="visible">
      <p>
      <div className="cross" onClick={onClose}> X </div>
      <h2>BUILD AN APP</h2>
      </p>
        <p>Here is the list of items that you are going to need when developing Android applications. Please note that, this is an exhaustive list, and you don't need to know it all from the get-go. Get an idea of the items listed, and just start building some apps and keep the items listed in the back of your mind and have a deep dive when using them.</p>
        <img src="assets/images/build-an-application.png" alt=""/>
        <div className="funlist">
            <ul>
                <li>
                    <a href="https://developer.android.com/guide/components/activities/intro-activities" target="_blank" rel="noopener noreferrer">Using Activities and Activity Life Cycles</a>
                </li>
                <li>
                    Building Flexible Interfaces using<a href="https://developer.android.com/guide/components/fragments" target="_blank" rel="noopener noreferrer"> Fragments</a>
                </li>
                <li>
                    <a href="https://developer.android.com/studio/debug" target="_blank" rel="noopener noreferrer">
                        Debugging Using Android Studio Debugger
                    </a>
                </li>
                <li>
                    <a href="https://developer.android.com/work/managed-configurations" target="_blank" rel="noopener noreferrer">
                        Handling App Configurations
                    </a>
                </li>
                <li>
                    <a href="https://developer.android.com/guide/components/intents-filters" target="_blank" rel="noopener noreferrer">
                        Using Intents and Intent Filters
                    </a>
                </li>
                <li>
                    <a href="https://guides.codepath.com/android/Using-Context" target="_blank" rel="noopener noreferrer">
                        Understand Context
                    </a>
                </li>
                <li>
                    <a href="https://developer.android.com/training/multiple-threads" target="_blank" rel="noopener noreferrer">
                        Learn About Multithreading
                    </a>
                </li>
                <li>
                    <a href="https://www.raywenderlich.com/6901838-data-privacy-for-android" target="_blank" rel="noopener noreferrer">
                        Data Privacy
                    </a>
                </li>
                <li>
                    <a href="https://www.raywenderlich.com/5634-securing-network-data-tutorial-for-android" target="_blank" rel="noopener noreferrer">
                        Securing Network Data
                    </a>
                </li>
                <li>
                    <a href="https://developer.android.com/training/dependency-injection" target="_blank" rel="noopener noreferrer">
                        Dependency Injection
                    </a>
                </li>
                <li>
                    <a href="https://developer.android.com/guide/topics/providers/content-providers" target="_blank" rel="noopener noreferrer">
                        Content Providers
                    </a>
                </li>
                <li>
                    <a href="https://github.com/bumptech/glide" target="_blank" rel="noopener noreferrer">Glide, </a><a href="https://square.github.io/retrofit/" target="_blank" rel="noopener noreferrer">Retrofit, </a><a href="https://firebase.google.com/docs/crashlytics/get-started" target="_blank" rel="noopener noreferrer">Crashlytics, </a><a href="https://github.com/google/gson" target="_blank" rel="noopener noreferrer">GSON</a>
                </li>
                <li>
                    <a href="https://developer.android.com/topic/libraries/architecture/room" target="_blank" rel="noopener noreferrer">Room, </a><a href="https://developer.android.com/guide/navigation/navigation-getting-started" target="_blank" rel="noopener noreferrer">Navigation, </a><a href="https://developer.android.com/topic/libraries/architecture/workmanager" target="_blank" rel="noopener noreferrer">Work Manager, </a><a href="https://developer.android.com/topic/libraries/architecture/livedata" target="_blank" rel="noopener noreferrer">LiveData, </a><a href="https://developer.android.com/topic/libraries/data-binding" target="_blank" rel="noopener noreferrer">Data Binding</a>
                </li>
                <li>
                    <a href="https://github.com/ReactiveX/RxJava" target="_blank" rel="noopener noreferrer">RxJava, </a><a href="https://github.com/ReactiveX/RxKotlin" target="_blank" rel="noopener noreferrer">RxKotlin</a>
                </li>
                <li>
                    <a href="https://developer.android.com/topic/performance/memory-overview" target="_blank" rel="noopener noreferrer">Memory Management Overview</a>
                </li>
                <li>
                    <a href="https://proandroiddev.com/diving-deeper-into-context-oriented-programming-in-kotlin-3ecb4ec38814" target="_blank" rel="noopener noreferrer">Diving Deeper into context-oriented programming in Kotlin</a>
                </li>
            </ul>
        </div>
        <p>Recommended <a href="https://www.udacity.com/course/developing-android-apps-with-kotlin--ud9012" target="_blank" rel="noopener noreferrer">Free Course</a> from Google on Android Development with Kotlin</p>
        <p>More Resources: </p>
        <div className="funlist">
        <ul>
            <li><a href="https://www.udacity.com/course/developing-android-apps-with-kotlin--ud9012" target="_blank" rel="noopener noreferrer">Developing Android Apps with Kotlin</a></li>
            <li><a href="https://developer.android.com/guide" target="_blank" rel="noopener noreferrer">Android Developer Guides</a></li>
            <li><a href="https://www.raywenderlich.com/" target="_blank" rel="noopener noreferrer">Raywenderlich</a></li>
        </ul>
        </div>		
        <button type="button" onClick={onClose}>continue to roadmap</button>
    </motion.div>
    </AnimatePresence>
  )
}

export default BuildApp
