---
id: ch02-indice-invariance-homotopie
type: proposition
chapter: 2
title: Invariance de l'indice par homotopie de lacets dans $\C\setminus\{z_0\}$
ref: Proposition II.3.4
page: 41
importance: 2
depends: [ch02-invariance-homotopie-integrale, ch02-indice-def, ch02-homotopie-simplement-connexe]
tags: [indice, homotopie, lacet, deformation, invariance]
---
## Intuition

> 💡 Le nombre de tours qu'un lacet fait autour d'un point $z_0$ ne change pas quand on **déforme continûment** le lacet, tant qu'on ne le fait jamais passer **sur** $z_0$. Pour changer le nombre de tours, il faudrait à un moment « décrocher » la courbe du point, c'est-à-dire la faire traverser $z_0$ : c'est exactement ce que l'hypothèse « homotopie dans $\C\setminus\{z_0\}$ » interdit.

Image mentale : un élastique posé autour d'un clou planté au point $z_0$. On peut le tordre et le déplacer comme on veut sans qu'il quitte la table ; le nombre de tours autour du clou est bloqué, sauf si on soulève l'élastique par-dessus le clou.

Rappels. L'**indice** $\Ind_{z_0}(\gamma)=\frac1{2i\pi}\int_\gamma\frac{\dd z}{z-z_0}$ est défini pour un lacet $\gamma$ ne passant pas par $z_0$ ([[ch02-indice-def]]). Une **homotopie de lacets** entre $\gamma_0$ et $\gamma_1$ dans un ouvert $\Omega$ est une application continue $\gamma:[0,1]^2\to\Omega$ avec $\gamma(0,\cdot)=\gamma_0$, $\gamma(1,\cdot)=\gamma_1$ et $\gamma(s,0)=\gamma(s,1)$ pour tout $s$ ([[ch02-homotopie-simplement-connexe]]) ; on note $\gamma_s=\gamma(s,\cdot)$ les lacets intermédiaires. Le résultat est un cas particulier du théorème d'invariance par homotopie de l'intégrale d'une fonction holomorphe ([[ch02-invariance-homotopie-integrale]]).

## Énoncé

**Proposition (poly, Proposition II.3.4, p. 41).** L'indice est invariant par homotopie de lacets. Plus précisément, s'il existe une homotopie dans $\C\setminus\{z_0\}$ entre deux lacets $\gamma_0$ et $\gamma_1$, alors
$$
\Ind_{z_0}(\gamma_0)=\Ind_{z_0}(\gamma_1).
$$

(Il s'agit d'une homotopie de lacets au sens de la Définition II.1.1 ; comme le souligne le poly, il est crucial qu'aucun des lacets $\gamma_s$ de l'homotopie ne passe par $z_0$.)

## Hypothèses

### H1 — L'homotopie est à valeurs dans $\C\setminus\{z_0\}$

**Rôle.** On applique le théorème d'invariance ([[ch02-invariance-homotopie-integrale]]) à $f(z)=\frac1{z-z_0}$ sur l'ouvert $\Omega=\C\setminus\{z_0\}$ : il faut que toute l'homotopie, et pas seulement $\gamma_0$ et $\gamma_1$, reste dans $\Omega$, où $f$ est holomorphe.

**Si on la retire.** Le cercle unité $\gamma_0(t)=e^{2i\pi t}$ et le lacet constant $\gamma_1\equiv0$ sont homotopes **dans $\C$** par $\gamma(s,t)=(1-s)e^{2i\pi t}$ (homotopie de lacets : $\gamma(s,0)=\gamma(s,1)=1-s$). Pourtant $\Ind_0(\gamma_0)=1$ ([[ch02-indice-cercle]]) et $\Ind_0(\gamma_1)=\frac1{2i\pi}\int_0^1\frac{\gamma_1'(t)}{\gamma_1(t)-0}\dd t=0$ (car $\gamma_1'\equiv0$ ; et de toute façon $\gamma_1$ passe par $0$, l'indice en $0$ n'y est même pas défini). L'homotopie traverse $z_0=0$ (en $s=1$) : la conclusion tombe.

### H2 — Homotopie de **lacets** : $\gamma(s,0)=\gamma(s,1)$ pour tout $s$

**Rôle.** C'est l'hypothèse du théorème II.2.1 ; dans sa preuve, les contributions des bords $\{s\}\times\{0\}$ et $\{s\}\times\{1\}$ du carré se compensent parce que ces deux chemins coïncident.

**Si on la retire.** Dans $\C\setminus\{0\}$, posons $\gamma(s,t)=e^{2i\pi(1-s)t}$. C'est une application continue $[0,1]^2\to\C\setminus\{0\}$ avec $\gamma(0,\cdot)$ = cercle unité (indice $1$ en $0$) et $\gamma(1,\cdot)\equiv1$ lacet constant (indice $0$). Mais pour $0<s<1$, $\gamma(s,0)=1\ne e^{2i\pi(1-s)}=\gamma(s,1)$ : les courbes intermédiaires ne sont pas des lacets. Les extrémités « glissent » et l'indice change.

### H3 — $\gamma_0$ et $\gamma_1$ sont des lacets (chemins $C^1$ par morceaux)

**Rôle.** Hypothèse de confort : elle rend les deux intégrales $\int_{\gamma_i}\frac{\dd z}{z-z_0}$ définies ([[ch01-def-chemin-lacet]]). Les lacets intermédiaires $\gamma_s$ n'ont pas besoin d'être réguliers : ils sont seulement continus.

**Si on la retire.** La conclusion reste vraie pour des lacets continus avec l'indice défini par relèvement de l'argument (hors programme), mais l'énoncé du poly n'a de sens que pour des chemins.

## Idée de la preuve

La fonction $f(z)=\frac1{z-z_0}$ est holomorphe sur $\Omega=\C\setminus\{z_0\}$, et l'homotopie est une homotopie de lacets dans $\Omega$ : le théorème II.2.1 donne $\int_{\gamma_0}f=\int_{\gamma_1}f$ ; on divise par $2i\pi$.

## Preuve

Posons $\Omega:=\C\setminus\{z_0\}$ ; c'est un ouvert de $\C$ (complémentaire d'un point, fermé). La fonction
$$
f:\Omega\to\C,\qquad f(z)=\frac1{z-z_0},
$$
est holomorphe sur $\Omega$ ([[ch01-stabilite-operations]] : inverse d'une fonction holomorphe ne s'annulant pas), donc $f\in\Hol(\Omega)$.

Par hypothèse, il existe $\gamma\in C([0,1]^2;\Omega)$ telle que $\gamma(0,t)=\gamma_0(t)$, $\gamma(1,t)=\gamma_1(t)$ et $\gamma(s,0)=\gamma(s,1)$ pour tous $s,t\in[0,1]$ : c'est une homotopie de lacets entre $\gamma_0$ et $\gamma_1$ **dans $\Omega$** ([[ch02-homotopie-simplement-connexe]]). Le théorème d'invariance par homotopie de l'intégrale d'une fonction holomorphe sur un lacet ([[ch02-invariance-homotopie-integrale]], poly, Théorème II.2.1, p. 37), appliqué à $\Omega$, $\gamma$ et $f$, donne
$$
\int_{\gamma_0}\frac{\dd z}{z-z_0}=\int_{\gamma_1}\frac{\dd z}{z-z_0}.
$$
En divisant par $2i\pi$, on obtient $\Ind_{z_0}(\gamma_0)=\Ind_{z_0}(\gamma_1)$ par définition de l'indice ([[ch02-indice-def]]). $\square$

Le point crucial, souligné par le poly : l'hypothèse « homotopie **dans $\C\setminus\{z_0\}$** » signifie que $\gamma(s,t)\neq z_0$ pour **tous** $(s,t)$, c'est-à-dire qu'aucun des lacets intermédiaires $\gamma_s$ ne passe par $z_0$ ; sans cela $f$ n'est pas holomorphe sur un ouvert contenant l'image de l'homotopie et le théorème II.2.1 ne s'applique pas.

## Preuve à trous

On pose $\Omega=\C\setminus\{z_0\}$ et $f(z)=\frac1{z-z_0}$ ; alors <trou indice="où f est-elle holomorphe, et pourquoi est-ce exactement l'ouvert de l'homotopie ?">$f\in\Hol(\Omega)$ et l'homotopie $\gamma$ est, par hypothèse, une homotopie de lacets à valeurs dans ce même ouvert $\Omega$ (aucun $\gamma_s$ ne passe par $z_0$)</trou>. On applique <trou indice="le théorème central de la section II.2">le théorème d'invariance par homotopie de l'intégrale d'une fonction holomorphe sur un lacet (Théorème II.2.1)</trou> : $\int_{\gamma_0}f(z)\dd z=\int_{\gamma_1}f(z)\dd z$, et il reste à <trou>diviser par $2i\pi$ pour reconnaître $\Ind_{z_0}(\gamma_0)=\Ind_{z_0}(\gamma_1)$</trou>. $\square$

## Exemples

* **Le bord d'un carré a pour indice $1$ en son centre.** Soit $\sigma$ le lacet parcourant le bord du carré $[-1,1]^2$ dans le sens direct (quatre segments), et $z_0=0$. L'application $\gamma(s,t)=(1-s)\sigma(t)+s\dfrac{\sigma(t)}{|\sigma(t)|}$ est continue sur $[0,1]^2$ (car $\sigma(t)\neq0$), vérifie $\gamma(s,0)=\gamma(s,1)$, et ne s'annule jamais : $\gamma(s,t)=\lambda_{s,t}\,\sigma(t)$ avec $\lambda_{s,t}=(1-s)+\frac{s}{|\sigma(t)|}>0$. C'est donc une homotopie de lacets dans $\C\setminus\{0\}$ entre $\sigma$ et $\gamma_1(t)=\sigma(t)/|\sigma(t)|$, qui parcourt le cercle unité une fois dans le sens direct : l'argument de $\sigma(t)$ croît strictement le long du bord et augmente de $2\pi$ sur un tour, donc $\gamma_1$ est un reparamétrage croissant, $C^1$ par morceaux, du cercle $C(0,1)$, et l'intégrale est invariante par reparamétrage croissant ([[ch01-integrale-reparametrage-oppose-concatenation]]). D'où $\Ind_0(\sigma)=\Ind_0(C(0,1))=1$ ([[ch02-indice-cercle]]). Le même argument « projection radiale » vaut pour tout lacet $\sigma$ étoilé par rapport à $z_0$ (rectangle, demi-disque, trou de serrure) : c'est la justification de « indice $=1$ » pour les contours usuels des calculs d'intégrales ([[ch02-formule-residus-pratique]]).
* **Lacet dans un ouvert simplement connexe évitant $z_0$.** Si $\Omega$ est simplement connexe et $z_0\notin\Omega$ (par exemple $\Omega=\{\Re(z)>0\}$, convexe donc étoilé donc simplement connexe, [[ch02-etoile-simplement-connexe]], et $z_0=-1$), tout lacet $\gamma$ de $\Omega$ est homotope dans $\Omega\subset\C\setminus\{z_0\}$ à un lacet constant $c$. Or $\Ind_{z_0}(c)=\frac1{2i\pi}\int_0^1\frac{c'(t)}{c-z_0}\dd t=0$ puisque $c'\equiv0$. Donc $\Ind_{z_0}(\gamma)=0$.
* **Utilisation par contraposée.** Le lacet $\gamma(t)=e^{4i\pi t}$ (cercle parcouru deux fois) a pour indice $2$ en $0$, le cercle unité a pour indice $1$ : ils ne sont **pas** homotopes dans $\C\setminus\{0\}$ (ils le sont dans $\C$). L'indice est un invariant d'homotopie qui permet de distinguer des classes de lacets ; c'est l'idée derrière $\pi_1(\C\setminus\{0\})\simeq\Z$ ([[ch02-groupe-fondamental-remarque]]).

## Pièges

* > ⚠️ Vérifier que l'homotopie évite $z_0$ **pour tout $s$**, pas seulement pour $s=0$ et $s=1$. Pour une déformation linéaire $\gamma(s,t)=(1-s)\gamma_0(t)+s\gamma_1(t)$, il faut s'assurer que $z_0$ n'est sur aucun segment $[\gamma_0(t),\gamma_1(t)]$.
* Il faut une homotopie de **lacets** ($\gamma(s,0)=\gamma(s,1)$) : des extrémités libres font changer l'indice (H2).
* La proposition dit « homotopes $\Rightarrow$ même indice », pas la réciproque. Deux lacets de même indice en $z_0$ sont bien homotopes dans $\C\setminus\{z_0\}$ (c'est $\pi_1(\C\setminus\{z_0\})\simeq\Z$), mais ce n'est pas démontré dans le poly ; et dans $\C\setminus\{z_0,z_1\}$, l'égalité des deux indices en $z_0$ et $z_1$ ne suffit plus.
* Le résultat porte sur l'indice en un point **fixé** $z_0$ ; pour deux points $z_0,z_1$ différents, il faut une homotopie dans $\C\setminus\{z_0,z_1\}$ pour conserver les deux indices à la fois.
