import React from "react";

export default function IntroductionVideoModal() {
  return (
    <video
      className="orca-video"
      autoPlay
      controls
      preload="metadata"
      crossOrigin="anonymous"
    >
      <source
        src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7"
        type="video/mp4"
      />
      <track
        label="EN"
        srcLang="en-US"
        src="https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/apps/fiverr_lohp_video_en-US.00c8c11.vtt"
        default
        kind="subtitles"
      />
      <track
        label="DE"
        srcLang="de-DE"
        src="https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/apps/fiverr_lohp_video_de-DE.479343e.vtt"
        kind="subtitles"
      />
      <track
        label="ES"
        srcLang="es"
        src="https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/apps/fiverr_lohp_video_es.0e7d9ce.vtt"
        kind="subtitles"
      />
      <track
        label="FR"
        srcLang="fr-FR"
        src="https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/apps/fiverr_lohp_video_fr-FR.62936b3.vtt"
        kind="subtitles"
      />
      <track
        label="IT"
        srcLang="it-IT"
        src="https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/apps/fiverr_lohp_video_it-IT.15d2b21.vtt"
        kind="subtitles"
      />
      <track
        label="NL"
        srcLang="nl-NL"
        src="https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/apps/fiverr_lohp_video_nl-NL.23e247e.vtt"
        kind="subtitles"
      />
      <track
        label="PT"
        srcLang="pt-BR"
        src="https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/apps/fiverr_lohp_video_pt-BR.b8ba68e.vtt"
        kind="subtitles"
      />
    </video>
  );
}
