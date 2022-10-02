import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Flex } from "~/components/common/Flex";
import { Pill } from "~/components/common/Pill";
import { boost } from "~/utils/boost";

type Props = {
  count?: number;
  content?: any;
  refId?: string;
  readOnly?: boolean;
};

export const Booster = ({ count, content, readOnly, refId }: Props) => {
  const [submitting, setSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    setIsSuccess(false);
    setSubmitting(false);
  }, [refId]);

  let { image_url: imageUrl } = content || {};

  if (imageUrl) {
    imageUrl = imageUrl.replace(".jpg", "_l.jpg");
  }

  const defaultBoostAmount = 5;

  async function doBoost() {
    if (submitting || !refId) {
      return;
    }

    setSubmitting(true);

    // eslint-disable-next-line no-useless-catch
    try {
      await boost(refId, defaultBoostAmount);

      setIsSuccess(true);
    } catch (e) {
      throw e;
    }

    setSubmitting(false);
  }

  if (readOnly) {
    if (!count) {
      return null;
    }

    return (
      <Pill style={{ padding: "1px 8px 1px 3px", width: "fit-content" }}>
        <Flex align="center" direction="row" justify="center">
          <span className="material-icons" style={{ fontSize: 12 }}>
            bolt
          </span>
          <div style={{ fontSize: 10 }}>{count || 0}</div>
        </Flex>
      </Pill>
    );
  }

  return (
    <div>
      {isSuccess ? (
        <Flex align="center" direction="row" justify="center">
          <span
            className="material-icons"
            style={{ color: "#49c998", fontSize: 20 }}
          >
            bolt
          </span>
        </Flex>
      ) : (
        <Pill
          disabled={isSuccess || submitting}
          onClick={() => {
            if (isSuccess || submitting) {
              return;
            }

            doBoost();
          }}
          style={{ width: 50 }}
        >
          {submitting ? (
            <ClipLoader color="#fff" loading size={10} />
          ) : (
            <Flex align="center" direction="row" justify="center">
              <span className="material-icons" style={{ fontSize: 14 }}>
                bolt
              </span>
              <div style={{ marginRight: 8 }}>Boost</div>
            </Flex>
          )}
        </Pill>
      )}
    </div>
  );
};
