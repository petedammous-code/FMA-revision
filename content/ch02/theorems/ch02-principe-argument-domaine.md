---
id: ch02-principe-argument-domaine
type: corollary
chapter: 2
title: "Principe de l'argument pour le bord d'un domaine : $Z(g,U)-P(g,U)$"
ref: Corollaire II.8.2
page: 53
importance: 3
depends: [ch02-principe-argument, ch02-rouche-faits-admis-remarque, ch02-residus-hypothese-homotope-remarque, ch02-jordan-remarque, ch02-indice-entier-localement-constant, ch02-meromorphes-corps, ch02-localement-fini-caracterisations]
tags: [principe-argument, zeros, poles, comptage, domaine, orientation]
---
## Intuition

> 💡 On veut **compter** les zéros d'une fonction dans une région $U$ sans les calculer. On intègre la dérivée logarithmique $g'/g$ sur le bord de $U$, parcouru une fois dans le sens direct : le résultat, divisé par $2i\pi$, est le nombre de zéros **moins** le nombre de pôles de $g$ dans $U$, comptés avec multiplicité.

C'est le principe de l'argument ([[ch02-principe-argument]]) dans le cas où le lacet est le **bord** d'un domaine : chaque point de $U$ est entouré exactement une fois (indice $1$) et chaque point extérieur zéro fois. Les indices disparaissent et il ne reste que le décompte $Z(g,U)-P(g,U)$. C'est l'outil qui mène au théorème de Rouché ([[ch02-rouche]]).

Notations ([[ch02-pole-meromorphe-def]]) : pour $g$ méromorphe et $U$ un ouvert où $g$ n'a qu'un nombre fini de zéros et de pôles, $Z(g,U)=\sum_{s\in\mathcal Z(g,U)}m(s)$ et $P(g,U)=\sum_{s\in\mathcal P(g,U)}m(s)$ sont les nombres de zéros et de pôles de $g$ dans $U$ comptés avec multiplicité. « Lacet orienté positivement » : parcouru une fois, l'intérieur $U$ à gauche.

## Énoncé

**Corollaire (poly, Corollaire II.8.2, p. 53).** Soit $g$ une fonction méromorphe sur un ouvert $\Omega$ et soit $U$ un ouvert tel que $\bar U\subset\Omega$. On suppose que le bord $\Gamma$ de $U$ est un lacet orienté positivement qui ne contient pas de pôles ni de zéros de $g$. Alors
$$
\frac1{2i\pi}\int_\Gamma\frac{g'(z)}{g(z)}\,dz=Z(g,U)-P(g,U),
$$
où $Z(g,U)$ et $P(g,U)$ sont respectivement le nombre de zéros et de pôles de $g$ dans $U$ (les zéros et pôles étant comptés avec multiplicité).

*Faits admis par le poly (Remarque II.8.3, p. 53, [[ch02-rouche-faits-admis-remarque]]) :* l'indice de $\Gamma$ par rapport à tout point de $U$ vaut $1$, et le théorème de Jordan ($\C\setminus\Gamma$ a deux composantes connexes, l'une bornée, l'autre non bornée, pour $\Gamma$ lacet simple). En pratique, on n'utilise ce corollaire que lorsque ces faits sont faciles (disques, rectangles, domaines étoilés).

## Hypothèses

### H1 — $g$ méromorphe sur un ouvert $\Omega\supset\bar U$

**Rôle.** $g'/g$ doit être méromorphe au voisinage de tout $\bar U$ pour que le principe de l'argument s'applique ; la compacité de $\bar U$ dans $\Omega$ rend finis les nombres de zéros et de pôles dans $U$.

**Si on la retire.** $g(z)=z\,e^{1/z}$ est holomorphe sur $\Omega=\C\setminus\{0\}$, mais $\bar U=\bar D(0,1)\not\subset\Omega$. $g$ n'a aucun zéro ni pôle dans $U\cap\Omega$, donc « $Z-P$ » vaut $0$, alors que $\frac{g'}{g}=\frac1z-\frac1{z^2}$ donne $\frac1{2i\pi}\int_{C(0,1)}\frac{g'}{g}dz=1$. La singularité essentielle en $0\in U$ fausse le décompte.

### H2 — $\Gamma$ est un lacet (simple) orienté positivement

**Rôle.** C'est ce qui donne $\Ind_s(\Gamma)=1$ pour $s\in U$ (fait admis) et $\Ind_s(\Gamma)=0$ hors de $\bar U$ (composante non bornée de $\C\setminus\Gamma$).

**Si on la retire.** Pour $g(z)=z^n$ ($n\ge1$) et $\Gamma$ le cercle unité parcouru dans le sens horaire, $\frac1{2i\pi}\int_\Gamma\frac{n}{z}dz=-n=P-Z$ : le signe s'inverse. Si le cercle est parcouru deux fois, on obtient $2n$ : il faut un lacet **simple**.

### H3 — Ni zéro ni pôle de $g$ sur $\Gamma$

**Rôle.** L'intégrale $\int_\Gamma g'/g$ est alors définie, et chaque zéro ou pôle de $g$ dans $\bar U$ est en fait dans $U$, où son indice vaut $1$.

**Si on la retire.** $g(z)=z-1$ et $U=D(0,1)$ : $\int_{C(0,1)}\frac{dz}{z-1}$ diverge (intégrande en $\frac1t$ près de $t=0$), et la question « le zéro $1$ est-il compté ? » n'a pas de réponse.

## Idée de la preuve

On applique le principe de l'argument ([[ch02-principe-argument]]), dans la version où l'on suppose seulement $\Gamma$ homotope à un lacet constant dans $\Omega$ ([[ch02-residus-hypothese-homotope-remarque]]) ; les indices valent $1$ sur $U$ et $0$ hors de $\bar U$, et il n'y a pas de zéro ni de pôle sur $\Gamma=\partial U$.

## Preuve

Le poly ne donne pas de preuve ; voici la déduction, **en admettant** les faits de la Remarque II.8.3 et, de plus, que $\Gamma$ est homotope à un lacet constant dans $\bar U$ (évident pour un domaine étoilé par rapport à un point $z_0$ : $H(s,t)=(1-s)\Gamma(t)+sz_0$ reste dans $\bar U$, qui est étoilé ; en général c'est le théorème de Schoenflies, hors programme).

*Position de $U$.* Comme dans [[ch02-formule-residus-pratique]] : $U\subset\C\setminus\Gamma$, et $U$ est ouvert et fermé dans $\C\setminus\Gamma$ ; c'est donc une réunion de composantes connexes de $\C\setminus\Gamma$. L'indice vaut $1$ sur $U$ (fait admis) et $0$ sur la composante non bornée ([[ch02-indice-entier-localement-constant]]) : $U$ ne contient pas la composante non bornée, donc, par le théorème de Jordan ([[ch02-jordan-remarque]]), $U$ est la composante bornée, $U$ est connexe et borné, et $\C\setminus\bar U$ est la composante non bornée, où l'indice est nul.

*Finitude.* $\bar U$ est connexe (adhérence d'un connexe) et contenu dans une composante connexe $\Omega_0$ de $\Omega$. $g$ n'est pas identiquement nulle sur $\Omega_0$ (elle ne s'annule pas sur $\Gamma\subset\Omega_0$), donc $\mathcal M(\Omega_0)$ étant un corps ([[ch02-meromorphes-corps]]), les zéros et les pôles de $g$ forment une partie localement finie de $\Omega_0$. Comme $\bar U$ est un compact de $\Omega_0$, il n'en contient qu'un nombre fini ([[ch02-localement-fini-caracterisations]]) ; aucun n'est sur $\Gamma=\bar U\setminus U$, donc tous sont dans $U$, et $Z(g,U)$, $P(g,U)$ sont des entiers bien définis.

*Principe de l'argument.* Sur l'ouvert connexe $\Omega_0$, $g\not\equiv0$, et $\Gamma$ est un lacet de $\Omega_0$ évitant zéros et pôles de $g$, homotope à un lacet constant dans $\bar U\subset\Omega_0$. Le Lemme II.8.1 ([[ch02-principe-argument]]), dont la preuve n'utilise la simple connexité qu'à travers la formule des résidus, s'applique avec la Remarque II.5.3 ([[ch02-residus-hypothese-homotope-remarque]]) à la place de la simple connexité :
$$
\frac1{2i\pi}\int_\Gamma\frac{g'}{g}dz=\sum_{s\in\mathcal Z(g,\Omega_0)}\Ind_s(\Gamma)\,m(s)-\sum_{s\in\mathcal P(g,\Omega_0)}\Ind_s(\Gamma)\,m(s).
$$
Les zéros et pôles hors de $\bar U$ ont un indice nul ; ceux de $U$ ont un indice $1$. Il reste $\sum_{s\in\mathcal Z(g,U)}m(s)-\sum_{s\in\mathcal P(g,U)}m(s)=Z(g,U)-P(g,U)$. $\square$

## Preuve à trous

On admet que <trou indice="Remarque II.8.3">$\Ind_s(\Gamma)=1$ pour tout $s\in U$</trou>, et par Jordan $\C\setminus\bar U$ est la composante non bornée de $\C\setminus\Gamma$, où <trou>l'indice est nul</trou>. Les zéros et pôles de $g$ dans $\bar U$ sont en nombre fini car <trou indice="compacité + localement fini">$\bar U$ est un compact de $\Omega$ et ils forment une partie localement finie (g non identiquement nulle sur la composante de $\Omega$ contenant $\bar U$)</trou> ; aucun n'est sur $\Gamma$. Le <trou indice="Lemme II.8.1 avec la Remarque II.5.3">principe de l'argument, appliqué au lacet $\Gamma$ homotope à un point dans $\Omega$</trou>, donne $\frac1{2i\pi}\int_\Gamma\frac{g'}g=\sum_{\mathcal Z}\Ind_s(\Gamma)m(s)-\sum_{\mathcal P}\Ind_s(\Gamma)m(s)=Z(g,U)-P(g,U)$. $\square$

## Exemples

* **$g$ holomorphe : on compte les zéros.** $g(z)=z^n$, $U=D(0,1)$ : $\frac1{2i\pi}\int_{C(0,1)}\frac{nz^{n-1}}{z^n}dz=n=Z(g,U)$.
* **Zéros et pôles.** $g(z)=\dfrac{z^2+1}{z(z-3)}$, $U=D(0,2)$, $\Omega=\C$. Zéros $\pm i\in U$ (simples), pôles $0\in U$ et $3\notin\bar U$. Donc $\frac1{2i\pi}\int_{C(0,2)}\frac{g'}{g}=2-1=1$. Vérification directe : $\frac{g'}{g}=\frac{2z}{z^2+1}-\frac1z-\frac1{z-3}$, dont les intégrales sur $C(0,2)$ divisées par $2i\pi$ valent $2$, $-1$ et $0$.
* **Pas de zéro sans calcul.** $g(z)=3+z+z^2$, $U=D(0,1)$. Sur $C(0,1)$, $\Re g(z)\ge3-|z|-|z|^2=1>0$ : le lacet image $g\circ\Gamma$ est contenu dans le demi-plan $\{\Re w>0\}$, convexe donc simplement connexe et ne contenant pas $0$, donc $\Ind_0(g\circ\Gamma)=\frac1{2i\pi}\int_{g\circ\Gamma}\frac{dw}{w}=0$ ([[ch02-cauchy-simplement-connexe]] appliqué à $1/w$). Or $\Ind_0(g\circ\Gamma)=\frac1{2i\pi}\int_\Gamma\frac{g'}g$ (voir [[ch02-principe-argument]]), donc $Z(g,D(0,1))=0$. En effet, les racines $\frac{-1\pm i\sqrt{11}}2$ sont de module $\sqrt3>1$. C'est exactement le mécanisme de la preuve de Rouché.

## Pièges

* > ⚠️ Le résultat est $Z-P$, pas $Z$ : si $g$ a des pôles dans $U$, ils se soustraient. Pour compter les zéros d'une fonction holomorphe, pas de problème.
* > ⚠️ Multiplicités : un zéro double compte pour $2$.
* L'hypothèse $\bar U\subset\Omega$ porte sur l'**adhérence** : $g$ doit être méromorphe sur un voisinage du bord aussi.
* Orientation : sens direct = $U$ à gauche ; un bord parcouru dans le sens horaire donne $P-Z$.
* L'énoncé repose sur des faits **admis** (indice $1$, Jordan) ; en copie, on l'applique à des disques, rectangles ou secteurs, pour lesquels une phrase de justification suffit.
