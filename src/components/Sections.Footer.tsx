import { format } from "date-fns";
import type { Locale } from "date-fns";
import {
  Divider,
  styled,
  useTheme,
  Typography,
  Grid as Grid2,
} from "@mui/material";
import { Actions } from "./Actions";
import {
  KeyboardDoubleArrowDown,
  KeyboardDoubleArrowRight,
} from "@mui/icons-material";
import type { ModalCustomProps } from "../types/utils";
import type { Labels } from '../types';

const PreviewDateTypoStyled = styled(Typography)(({ theme }) => ({
  position: "relative",
  top: "1px",
  minWidth: "130px",
  fontSize: 14,
  lineHeight: "14px",
  color: theme.palette.grey[800],
}));

const PreviewDateMessageTypoStyled = styled(Typography)(({ theme }) => ({
  position: "relative",
  top: "1px",
  minWidth: "130px",
  fontSize: 14,
  lineHeight: "14px",
  color: theme.palette.grey[500],
}));

type FooterProps = {
  startDate?: Date;
  endDate?: Date;
  locale?: Locale;
  labels?: Labels;
  singleCalendar?: boolean;
} & Omit<ModalCustomProps, "onSubmit"> & {
    onSubmit: () => void;
  };

export const Footer = ({
  startDate,
  endDate,
  locale,
  labels,
  onCloseCallback,
  onSubmit,
  RangeSeparatorIcons,
  singleCalendar,
}: FooterProps) => {
  const theme = useTheme();
  const previewDate = (date: Date) => {
    return format(date, "dd MMMM yyyy", { locale });
  };

  const IconXs = RangeSeparatorIcons?.xs || KeyboardDoubleArrowDown;
  const IconMd = RangeSeparatorIcons?.md || KeyboardDoubleArrowRight;

  return (
    <>
      <Grid2
        xs
        className="DRP-footer-preview-date"
        container
        gap={"8px"}
        direction={{
          xs: "column",
          md: singleCalendar ? "column" : "row",
        }}
        justifyContent="flex-start"
        alignItems={"center"}
      >
        {startDate ? (
          <PreviewDateTypoStyled
            textAlign={{
              xs: "center",
              md: "left",
            }}
          >
            {previewDate(startDate)}
          </PreviewDateTypoStyled>
        ) : (
          <PreviewDateMessageTypoStyled
            textAlign={{
              xs: "center",
              md: "left",
            }}
          >
            {labels?.footer?.startDate || 'Start Date'}
          </PreviewDateMessageTypoStyled>
        )}

        <IconXs
          fontSize="small"
          sx={{
            fill: theme.palette.grey[400],
            display: {
              xs: "block",
            md: singleCalendar ? "block" : "none",
            },
          }}
        />

        <IconMd
          fontSize="small"
          sx={{
            fill: theme.palette.grey[400],
            display: {
              xs: "none",
            md: singleCalendar ? "none" : "block",
            },
          }}
        />

        {endDate ? (
          <PreviewDateTypoStyled
            textAlign={{
              xs: "center",
              md: "left",
            }}
          >
            {previewDate(endDate)}
          </PreviewDateTypoStyled>
        ) : (
          <PreviewDateMessageTypoStyled
            textAlign={{
              xs: "center",
              md: "left",
            }}
          >
            {labels?.footer?.endDate || 'End Date'}
          </PreviewDateMessageTypoStyled>
        )}
      </Grid2>

      <Grid2
        display={{
          xs: "block",
          md: "none",
        }}
      >
        <Divider orientation="horizontal" />
      </Grid2>

      <Grid2 xs="auto" container justifyContent={"flex-end"}>
        <Actions onCloseCallback={onCloseCallback} onSubmit={onSubmit} labels={labels?.actions} />
      </Grid2>
    </>
  );
};
