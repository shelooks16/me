---
title: Prepare Windows for Android development without installing Android Studio
description: Configure Android environment for Flutter and React Native development using command line tools.
date: 2021-08-16
---

Do you really need to install Android Studio to develop Android apps? No.
However, most tutorials and docs say Android Studio is required. The truth
is... Android Studio is advised to be installed only because it comes with
all necessary tools to run and build android apps, it is essentially not
needed as an editor.

This article aims at setting up a minimal Android environment sufficient to
develop and build Android apps. For example, Flutter and React Native apps. For a
fully-featured, rich Android development experience, it is better to
install Android Studio.

If you do not want to install Android Studio and yet develop Flutter and
React Native apps - this article is just for you. You are going to discover
how to manually:

- install Android SDK with build tools
- use Android Studio Emulator to create and run Android Virtual Devices (AVDs)

### Virtualization

Virtualization is a feature that allows to create virtual hardware. We will
need to enable virtualization for Android Studio Emulator.

There are two ways to use virtualization: either through Hyper-V or HAXM.
The setup depends on your PC. [Read this small
guide](https://docs.microsoft.com/en-us/xamarin/android/get-started/installation/android-emulator/hardware-acceleration)
to see if virtualization is supported and how to enable it.

It is possible that your CPU is pretty old and does not support
virtualization. Not that good, but do not worry. One option is to use very
slow ARM-based Android Device images while keep using Android Studio
Emulator. Another, more hardened solution is to just use third-party
Android emulator such as [Genymotion](https://www.genymotion.com/). This
topic is touched one more time in [the Android Studio Emulator section](#configuring-and-using-android-studio-emulator).

### Java Development Kit (JDK)

Android SDK requires JDK to be installed. First, check if JDK is already
installed. Open any terminal (CMD, Powershell, git-bash) and execute:

```
javac --version
```

If above command prints installed version, then JDK is already installed.
Feel free to skip this section.

Installation:

1. [Download latest JDK
   version](https://www.oracle.com/java/technologies/javase-downloads.html).
   Select JDK download > <mark>Windows x64 Compressed Archive</mark>

2. Unpack downloaded .zip somewhere, e.g. <mark>C:\Program Files
   (x86)\Java\jdk-15.0.2</mark> (version might be different for you)

3. Add new system environment variable named <mark>JAVA_HOME</mark>,
   value must be the path to folder where you unpacked JDK in step 2. [How
   to edit system environment
   variables](https://docs.oracle.com/en/database/oracle/machine-learning/oml4r/1.5.1/oread/creating-and-modifying-environment-variables-on-windows.html)

4. To existing <mark>PATH</mark> system variable add:

   ```
   %JAVA_HOME%\bin
   ```

To verify installation, execute <mark>javac --version</mark> in terminal.

### Android SDK

Android SDK is what allows to build and run Android apps. We gonna use <mark>sdkmanager</mark> CLI to download required SDK packages.

Installation:

1. [Download sdkmanager](https://developer.android.com/studio#downloads).
   Scroll to <mark>Command line tools only</mark> section, get .zip for
   Windows.

2. Unpack downloaded .zip to <mark>C:\Android\cmdline-tools\latest</mark>
   so that <mark>bin</mark> folder is inside <mark>latest</mark>

3. Add new system environment variable named <mark>ANDROID_HOME</mark>
   with value <mark>C:\Android</mark>. [How to edit system environment
   variables](https://docs.oracle.com/en/database/oracle/machine-learning/oml4r/1.5.1/oread/creating-and-modifying-environment-variables-on-windows.html)

4. To existing <mark>PATH</mark> system variable add:

   ```
   %ANDROID_HOME%\cmdline-tools\latest\bin
   %ANDROID_HOME%\emulator
   ```

5. Open any terminal and execute:

   ```
   sdkmanager.bat --version
   ```

   If you did everything correctly, it should print the installed version.

6. To see the list of all available packages that we can download:

   ```
   sdkmanager.bat --list
   ```

7. We gonna install SDK packages of version 30. That version targets
   Android 11. From the terminal:

   ```
   sdkmanager.bat "platform-tools"
   sdkmanager.bat "build-tools;30.0.3"
   sdkmanager.bat "platforms;android-30"
   ```

   In case you need newer platform version, use the command from step 6 to
   check what packages are available for download. Installation pattern is
   the same as in above code snippet.

After installation, in folder <mark>C:\Android</mark> you should see a
bunch of new folders and files.

Now all required tools are installed, including Android Studio Emulator.
The only thing left is to download and configure an Android Virtual Device
(AVD) itself.

### Configuring and using Android Studio Emulator

Setting up an Android Virtual Device (AVD) is very similar to setting up a
Virtual Machine (VM) using something like Virtual Box: get an image, then
create virtual environment from the image.

> NOTE: if virtualization is not enabled, your only option is to install
> ARM-based images which do not need hardware virtualization. When choosing
> an image, make sure it contains arm\*, NOT x86/x64. ARM-based images are
> NOT recommended since they are slow and too often just broken (do not
> run). A better solution would be to use some other Android Emulator
> such as [Genymotion](https://www.genymotion.com/)

1. List all system images available for download:

   ```
   // findstr works in CMD and Powershell
   // for unix-type shells use grep
   sdkmanager.bat --list | findstr system-images
   ```

2. Download the image. We are going to use x86-based Android 11 image (API
   v30):

   ```
   sdkmanager.bat --install "system-images;android-30;google_apis;x86"

   // if virtualization is not enabled, use arm-type image
   sdkmanager.bat --install "system-images;android-30;google_apis;arm64-v8a"
   ```

3. Create an AVD from the downloaded image using <mark>avdmanager</mark>:

   ```
   echo no | avdmanager.bat --verbose create avd --force --name "a11" --package "system-images;android-30;google_apis;x86" --tag "google_apis" --abi "x86"

   // for arm-type image
   echo no | avdmanager.bat --verbose create avd --force --name "a11_arm" --package "system-images;android-30;google_apis;arm64-v8a" --tag "google_apis" --abi "arm64-v8a"
   ```

   - <mark>--name</mark> for AVD alias. Pick something meaningful and short
   - <mark>--package</mark> must be image name from step 2
   - <mark>--tag</mark> image tag to use, taken from image name (google_apis)
   - <mark>--abi</mark> CPU architecture to use, taken from image name (x86 and arm64-v8a)
   - <mark>echo no</mark> to skip post-prompt

   <br />

4. List all installed AVDs:

   ```
   emulator -list-avds
   ```

5. Launch AVD:

   ```
   emulator @a11
   ```

   Checkout all startup options [over
   here](https://developer.android.com/studio/run/emulator-commandline#startup-options).
   To stop emulator, just quit by pressing "X" or stop execution with "CTRL + C" in the terminal.

Congrats 🥳 You are now ready to go! All installed AVDs are located in User folder at <mark>~/.android/avd</mark>. If you need to remove installed AVD, just delete
folder with its name.

I recommend to use [this
gist](https://gist.github.com/mrk-han/66ac1a724456cadf1c93f4218c6060ae) as
a cheatsheet for managing AVDs. That gist also gives a really awesome tip
to make AVD more friendly. Open <mark>~/.android/avd/an10.avd/config.ini</mark> and
add those lines:

```
skin.name=1080x1920   # proper screen size for emulator
hw.lcd.density=480
hw.keyboard=yes       # enables keys from PC to be used in the emulator
```

Cheers! Go install React Native and start developing 💪

<img src="/articles/android-power.png" alt="android" width="90" height="160" />
