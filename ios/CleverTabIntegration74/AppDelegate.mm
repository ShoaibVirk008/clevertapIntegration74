#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
// #import <CleverTap-iOS-SDK/CleverTap.h>
// #import <clevertap-react-native/CleverTapReactManager.h>
#import "CleverTap.h"
#import "CleverTapReactManager.h"
@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"CleverTabIntegration74";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};
[CleverTap autoIntegrate]; // integrate CleverTap SDK using the autoIntegrate option
[CleverTap setDebugLevel:CleverTapLogDebug];
[[CleverTapReactManager sharedInstance] applicationDidLaunchWithOptions:launchOptions];
  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  return [self bundleURL];
}

- (NSURL *)bundleURL
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
