declare module 'react-native-vector-icons/AntDesign' {
    import { Icon } from 'react-native-vector-icons/Icon';
    export default Icon;
  }
  
  declare module 'react-native-vector-icons/Entypo' {
    import { Icon } from 'react-native-vector-icons/Icon';
    export default Icon;
  }
  
  declare module 'react-native-vector-icons/EvilIcons' {
    import { Icon } from 'react-native-vector-icons/Icon';
    export default Icon;
  }
  
  declare module 'react-native-vector-icons/Feather' {
    import { Icon } from 'react-native-vector-icons/Icon';
    export default Icon;
  }
  
  declare module 'react-native-vector-icons/FontAwesome' {
    import { Icon } from 'react-native-vector-icons/Icon';
    export default Icon;
  }
  
  declare module 'react-native-vector-icons/FontAwesome5' {
    import { Icon } from 'react-native-vector-icons/Icon';
    export default Icon;
  }
  
  declare module 'react-native-vector-icons/FontAwesome5Pro' {
    import { Icon } from 'react-native-vector-icons/Icon';
    export default Icon;
  }
  
  declare module 'react-native-vector-icons/Fontisto' {
    import { Icon } from 'react-native-vector-icons/Icon';
    export default Icon;
  }
  
  declare module 'react-native-vector-icons/Foundation' {
    import { Icon } from 'react-native-vector-icons/Icon';
    export default Icon;
  }
  
  declare module 'react-native-vector-icons/Ionicons' {
    import { Icon } from 'react-native-vector-icons/Icon';
    export default Icon;
  }
  
  declare module 'react-native-vector-icons/MaterialCommunityIcons' {
    import { Icon } from 'react-native-vector-icons/Icon';
    export default Icon;
  }
  
  declare module 'react-native-vector-icons/MaterialIcons' {
    import { Icon } from 'react-native-vector-icons/Icon';
    export default Icon;
  }
  
  declare module 'react-native-vector-icons/Octicons' {
    import { Icon } from 'react-native-vector-icons/Icon';
    export default Icon;
  }
  
  declare module 'react-native-vector-icons/SimpleLineIcons' {
    import { Icon } from 'react-native-vector-icons/Icon';
    export default Icon;
  }

  declare module 'react-native-vector-icons/FontAwesome6' {
    import { Icon } from 'react-native-vector-icons/Icon';
    export default Icon;
  }

  declare module 'react-native-vector-icons/FontAwesome6Pro' {
    import { Icon } from 'react-native-vector-icons/Icon';
    export default Icon;
  }
  
  declare module 'react-native-vector-icons/Zocial' {
    import { Icon } from 'react-native-vector-icons/Icon';
    export default Icon;
  }
  
  declare module 'react-native-vector-icons/Icon' {
    import React from 'react';
    import { TextProps, StyleProp, TextStyle } from 'react-native';
    
    export interface IconProps extends TextProps {
      name: string;
      size?: number;
      color?: string;
      style?: StyleProp<TextStyle>;
    }
  
    const Icon: React.FC<IconProps>;
    export { Icon };
    export default Icon;
  }
  