---
id: ex-ch07-riccati-explosion
type: exercise
chapters: [7]
title: "Explosion en temps fini pour x' = t² + x²"
source: "Classique (équation de Riccati $x'=t^2+x^2$, cf. Arnold, *Équations différentielles ordinaires*) — rédaction et encadrement inventés"
difficulty: 2
time: 25
tools: [ch07-cauchy-lipschitz, ch07-restriction-domaine-c1-lipschitz, ch07-unicite-globale, ch07-courbe-integrale-maximale-def, ch07-equation-autonome-def, ch07-lemme-des-bouts]
---
## Énoncé

On considère le problème de Cauchy
$$
x'(t)=t^2+x(t)^2,\qquad x(0)=0 .
$$

1. Montrer qu'il admet une unique solution maximale $x:J\to\R$, puis que $J$ est symétrique par rapport à $0$ et que $x$ est impaire.
2. On note $b=\sup J\in\,]0,+\infty]$. Montrer que $x$ est strictement croissante sur $J$ et que $x(t)>0$ pour $t\in\,]0,b[$.
3. Montrer que $b\le1+\dfrac\pi2$.
4. On pose $Y(s,y)=(1,\,s^2+y^2)$ pour $(s,y)\in\R^2$. Montrer que $\sigma\mapsto(\sigma,x(\sigma))$, $\sigma\in J$, est la courbe intégrale maximale de $Y$ de condition initiale $(0,0)$ en $\sigma=0$. En déduire que $x$ n'est bornée sur $[0,b[$ par aucune constante, puis que $x(t)\to+\infty$ quand $t\to b^-$.
5. Montrer que $b\ge\sqrt{\pi/2}$.

## Indices

### Indice 1
Question 1 : le champ $(t,x)\mapsto t^2+x^2$ est polynomial. Pour l'imparité, regarder $t\mapsto-x(-t)$. Questions 3 et 5 : comparer à l'équation $u'=1+u^2$ (resp. $u'=k^2+u^2$), dont les solutions s'écrivent avec $\tan$ ; concrètement, dériver $\arctan x(t)$.

### Indice 2
Question 3 : pour $t\ge1$, $t^2\ge1$, donc $\theta(t)=\arctan x(t)$ vérifie $\theta'(t)=\dfrac{t^2+x^2}{1+x^2}\ge1$. Or $\theta$ reste $<\pi/2$. Question 4 : le champ $Y$ est autonome et $C^1$ : si $x$ restait bornée sur $[0,b[$ avec $b<+\infty$, la courbe $(\sigma,x(\sigma))$ resterait dans un compact — lemme des bouts.

### Indice 3
Question 5 : par l'absurde, si $b<\sqrt{\pi/2}$, poser $k=b$ et $\psi(t)=\arctan\big(x(t)/k\big)$ ; montrer $\psi'\le k$ sur $[0,b[$, donc $\psi(t)\le kb=b^2<\pi/2$, et en déduire que $x$ est bornée sur $[0,b[$.

## Corrigé

**1.** Le champ $X(t,x)=t^2+x^2$ est défini sur $I\times U=\R\times\R$ et de classe $C^1$ (polynomial), donc localement lipschitzien en $x$ ([[ch07-restriction-domaine-c1-lipschitz]]). Par Cauchy–Lipschitz ([[ch07-cauchy-lipschitz]]) et l'unicité globale ([[ch07-unicite-globale]]), il existe une unique solution maximale $x:J\to\R$ de condition initiale $(0,0)$, $J=J_0(0)$ intervalle ouvert contenant $0$ ([[ch07-courbe-integrale-maximale-def]]).

*Symétrie.* Posons $y(t)=-x(-t)$ pour $t\in -J=\{t : -t\in J\}$. Alors $y$ est $C^1$, $y(0)=0$ et
$$
y'(t)=x'(-t)=(-t)^2+x(-t)^2=t^2+y(t)^2 .
$$
Donc $y$ est une courbe intégrale de condition initiale $(0,0)$ définie sur l'intervalle ouvert $-J\ni 0$. Par définition de $J$ (réunion de tous les intervalles ouverts contenant $0$ portant une telle solution), $-J\subset J$ ; en appliquant ceci à $-J$, on a aussi $J\subset -J$, donc $J=-J$. Par unicité globale, $y=x$ sur $J$ : $x(-t)=-x(t)$, $x$ est impaire.

**2.** Pour $t\in J$, $x'(t)=t^2+x(t)^2\ge0$, avec égalité seulement si $t=0$ (et $x(0)=0$). La dérivée est donc $\ge0$ et ne s'annule qu'en $0$ : $x$ est strictement croissante sur $J$. Comme $x(0)=0$, on a $x(t)>0$ pour $t\in\,]0,b[$.

**3.** Si $b\le1$, il n'y a rien à montrer. Supposons $b>1$ et posons $\theta(t)=\arctan x(t)$ pour $t\in[1,b[$ ; $\theta$ est $C^1$ et
$$
\theta'(t)=\frac{x'(t)}{1+x(t)^2}=\frac{t^2+x(t)^2}{1+x(t)^2}\ \ge\ \frac{1+x(t)^2}{1+x(t)^2}=1\qquad(t\ge1).
$$
Donc pour $t\in[1,b[$, $\theta(t)\ge\theta(1)+(t-1)\ge t-1$ (car $\theta(1)=\arctan x(1)>0$). Comme $\theta(t)<\pi/2$, on obtient $t-1<\pi/2$ pour tout $t\in[1,b[$, donc $b\le1+\pi/2$. En particulier **$b$ est fini** : la solution, bien que le champ soit polynomial, n'est pas définie pour tout temps positif (et, par imparité, $\inf J=-b$).

**4.** *Courbe maximale de $Y$.* $Y:\R^2\to\R^2$ est un champ **autonome** ([[ch07-equation-autonome-def]]), polynomial donc $C^1$ et localement lipschitzien. Posons $\gamma(\sigma)=(\sigma,x(\sigma))$ pour $\sigma\in J$. Alors $\gamma'(\sigma)=(1,x'(\sigma))=(1,\sigma^2+x(\sigma)^2)=Y(\gamma(\sigma))$ et $\gamma(0)=(0,0)$ : c'est une courbe intégrale de $Y$. Elle est maximale : soit $\tilde\gamma=(\tilde s,\tilde y):\tilde J\to\R^2$ une courbe intégrale de $Y$ avec $\tilde\gamma(0)=(0,0)$. Alors $\tilde s'=1$, $\tilde s(0)=0$, donc $\tilde s(\sigma)=\sigma$, puis $\tilde y'(\sigma)=\sigma^2+\tilde y(\sigma)^2$, $\tilde y(0)=0$ : $\tilde y$ est solution du problème initial sur $\tilde J$, donc $\tilde J\subset J$. L'intervalle maximal de $\gamma$ est donc $J$, de borne supérieure $b$.

*$x$ non bornée.* Supposons qu'il existe $M$ avec $x(t)\le M$ pour $t\in[0,b[$. Comme $x\ge0$ sur $[0,b[$ et $b<+\infty$ (question 3), $\gamma([0,b[)\subset[0,b]\times[0,M]=:K$, compact de $\R^2$. Le lemme des bouts ([[ch07-lemme-des-bouts]], valable pour un champ autonome localement lipschitzien) appliqué à $Y$ donne $b=+\infty$ : contradiction. Donc $x$ n'est majorée sur $[0,b[$ par aucune constante.

*Limite.* $x$ est croissante sur $[0,b[$, donc $\lim_{t\to b^-}x(t)$ existe dans $]0,+\infty]$ ; elle ne peut être finie (sinon $x$ serait majorée par elle). Donc $x(t)\to+\infty$ quand $t\to b^-$.

**5.** Supposons $b<\sqrt{\pi/2}$ et posons $k=b>0$. Pour $t\in[0,b[$, $t^2\le k^2$, donc $x'(t)\le k^2+x(t)^2$. La fonction $\psi(t)=\arctan\big(x(t)/k\big)$ est $C^1$ sur $[0,b[$, $\psi(0)=0$ et
$$
\psi'(t)=\frac{x'(t)/k}{1+x(t)^2/k^2}=\frac{k\,x'(t)}{k^2+x(t)^2}\le k .
$$
Donc $\psi(t)\le kt\le kb=b^2$ pour $t\in[0,b[$, et $b^2<\pi/2$. Ainsi $x(t)=k\tan\psi(t)\le k\tan(b^2)$ (car $\tan$ est croissante sur $[0,\pi/2[$) : $x$ est bornée sur $[0,b[$, ce qui contredit la question 4. Donc $b\ge\sqrt{\pi/2}$.

**Bilan.** $\sqrt{\pi/2}\approx1{,}253\le b\le1+\pi/2\approx2{,}571$ (numériquement $b\approx2{,}003$), et $J=\,]-b,b[$.

## Pièges et variantes

* **« Le champ est $C^\infty$ sur $\R^2$ donc les solutions sont globales » : faux.** Cauchy–Lipschitz est un résultat **local** ; seule une estimation (confinement dans un compact, croissance au plus affine, quantité conservée) permet de conclure à l'existence globale. Ici la croissance quadratique en $x$ fait exploser la solution.
* **Lemme des bouts pour un champ dépendant du temps.** Le théorème du poly est énoncé pour un champ autonome ; l'astuce de la question 4 (ajouter le temps comme coordonnée, $s'=1$) ramène au cadre autonome. Il faut alors vérifier que la courbe $(\sigma,x(\sigma))$ est bien **maximale** pour $Y$, ce qui se fait en une ligne.
* **Comparaison : dériver le bon objet.** Écrire « $x'\ge1+x^2$ donc $x\ge\tan(t-1)$ » demande une justification ; dériver $\arctan x(t)$ la fournit proprement, sans théorème de comparaison général.
* Variante : pour $x'=x^2-t^2$, $x(0)=0$, on a $x(t)\le0$ pour $t\ge0$ et la solution est définie sur $[0,+\infty[$ (elle reste coincée entre $-t$ et $0$) : le signe du terme en $t^2$ change tout.
* Variante : pour $x'=t^2+x^2$ et $x(0)=x_0>0$, on a de plus $x'\ge x^2>0$, donc $(-1/x)'=x'/x^2\ge1$, d'où $0<1/x(t)\le1/x_0-t$ et $b\le\min\big(1/x_0\,,\ 1+\tfrac\pi2\big)$ : plus la condition initiale est grande, plus l'explosion est rapide.
