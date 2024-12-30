import {
  StyleSheet,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Image,
} from 'react-native';
import React, {memo} from 'react';
import Typography from '../typography/Typography';
import { COLORS } from '../../colors/index.color';
import { IMAGES } from '../../images';

interface IProps {
  title: string;
  onPress?: () => void;
  loading?: boolean;
  variant?: 'primary' | 'secondary' | 'danger' | 'reschedule';
  disabled?: boolean;
}

const Button = ({
  onPress,
  title,
  loading,
  variant = 'primary',
  disabled = false,
}: IProps) => {
  return (
    <View>
      {variant === 'primary' ? (
        <TouchableOpacity
          style={{
            ...styles.root,
            backgroundColor: disabled ? COLORS.placeholder : COLORS.primary,
          }}
          onPress={onPress}
          disabled={loading || disabled}>
          {loading ? (
            <ActivityIndicator color={COLORS.white} />
          ) : (
            <Typography variant="description16" color="white">
              {title}
            </Typography>
          )}
        </TouchableOpacity>
      ) : variant === 'reschedule' ? (
        <TouchableOpacity
          style={styles.rescheduleButton}
          onPress={onPress}
          disabled={loading || disabled}>
          {loading ? (
            <ActivityIndicator color={COLORS.white} />
          ) : (
            <Typography variant="description16" color="white">
              {title}
            </Typography>
          )}
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={onPress}>
          {loading ? (
            <ActivityIndicator color={COLORS.primary} />
          ) : (
            <View
              style={variant === 'danger' ? styles.danger : styles.loadMore}>
              <Typography variant="description16" style={styles.loadMoreTitle}>
                {title}
              </Typography>
              {variant === 'secondary' && (
                <Image source={IMAGES.DownArrow} />
              )}
            </View>
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default memo(Button);

const styles = StyleSheet.create({
  root: {
    paddingVertical: 12,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  loadMore: {
    textAlign: 'center',
    padding: 10,
    borderWidth: 0.5,
    borderColor: COLORS.placeholder,
    borderRadius: 8,
    backgroundColor: COLORS.textWhite,
    marginVertical: 10,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  danger: {
    paddingVertical: 12,
    backgroundColor: COLORS.danger,
    textAlign: 'center',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    color: COLORS.white,
  },
  loadMoreTitle: {
    marginRight: 5,
  },
  rescheduleButton: {
    paddingVertical: 12,
    backgroundColor: COLORS.gold,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
});
