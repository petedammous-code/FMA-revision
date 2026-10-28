---
id: ch08-groupe-un-parametre-invariance
type: definition
chapter: 8
title: "Groupe à un paramètre de difféomorphismes $(F_s)_{s\in\mathbb R}$ engendré par un champ $X$ ; Lagrangien invariant"
ref: "non numéroté, section VIII, p. 145"
page: 145
importance: 2
depends: [ch07-champ-vecteurs-courbe-integrale-def, ch07-flot-global-def, ch07-translation-temps-autonome, ch07-groupe-un-parametre, ch07-flot-global-ouvert-regulier, ch08-ouverture-courbes-confinees]
tags: [noether, flot, symetrie, groupe-a-un-parametre, invariance, champ-de-vecteurs]
---
## Intuition

> 💡 Une **symétrie** d'un système mécanique est une transformation des positions qui ne change pas le Lagrangien : translater tout le système dans une direction où rien ne varie, tourner autour d'un axe pour un potentiel central... Une famille continue de telles transformations $(F_s)_{s\in\R}$, avec $F_0=\mathrm{Id}$ et $F_{s_1}\circ F_{s_2}=F_{s_1+s_2}$, s'appelle un **groupe à un paramètre de difféomorphismes**. On l'obtient en « laissant couler » un champ de vecteurs $X$ pendant le temps $s$.

Image mentale : un fluide stationnaire dont la vitesse au point $x$ est $X(x)$ ; $F_s(x)$ est la position, au temps $s$, de la particule de fluide partie de $x$. Le Lagrangien est **invariant** si, quand on transporte une position $q$ par $F_s$ **et** une vitesse $v$ par la différentielle $d(F_s)_q$ (comme on transporte un vecteur tangent à une courbe), la valeur de $L$ ne change pas. Le théorème de Noether ([[ch08-noether]]) associe à chaque telle symétrie une quantité conservée.

Rappels (chapitre VII) : un **champ de vecteurs autonome** sur l'ouvert $\mathcal U$ est une application $X:\mathcal U\to V$ ; une **courbe intégrale** est une courbe $c$ avec $c'(s)=X(c(s))$ ([[ch07-champ-vecteurs-courbe-integrale-def]]) ; le **flot global** $F(s,x)$ est la valeur au temps $s$ de la courbe intégrale maximale passant par $x$ au temps $0$ ([[ch07-flot-global-def]]).

## Énoncé

**Définition (poly, non numérotée, section VIII, p. 145).** On suppose le Lagrangien $L$ (de classe $C^1$) défini sur $I\times\mathcal U\times V$, où $\mathcal U$ est un ouvert de $V$. Soit $X$ un champ de vecteurs de classe $C^\infty$ sur $\mathcal U$ ne dépendant pas du temps, et soit $(s,x)\mapsto F(s,x)=F_s(x)$ son flot, que l'on suppose défini sur $\R\times\mathcal U$ :
$$
\frac{\partial F}{\partial s}(s,x)=X\big(F(s,x)\big),\qquad F(0,x)=x\qquad\big((s,x)\in\R\times\mathcal U\big).
$$
Pour tout $s\in\R$, $F_s$ est un difféomorphisme de $\mathcal U$ dans lui-même, et $F_{s_1}\circ F_{s_2}=F_{s_1+s_2}$ pour tous $s_1,s_2\in\R$ (avec $F_0=\mathrm{Id}_{\mathcal U}$) : on dit que $(F_s)_{s\in\R}$ est un **groupe à un paramètre de difféomorphismes** de $\mathcal U$.

On dit que **$L$ est invariant sous l'action du groupe à un paramètre de difféomorphismes $(F_s)_{s\in\R}$** si
$$
\forall s\in\R,\ \forall(u,q,v)\in I\times\mathcal U\times V,\qquad L\big(u,F_s(q),d(F_s)_q(v)\big)=L(u,q,v).
$$

*Justification des propriétés rappelées par le poly.* $F$ est de classe $C^\infty$ sur son domaine ([[ch07-flot-global-ouvert-regulier]]), donc chaque $F_s$ est $C^\infty$. La propriété de groupe est la formule $F_{s_1}\circ F_{s_2}=F_{s_1+s_2}$ des champs autonomes ([[ch07-translation-temps-autonome]], [[ch07-groupe-un-parametre]]) ; elle donne $F_s\circ F_{-s}=F_{-s}\circ F_s=F_0=\mathrm{Id}_{\mathcal U}$, donc $F_s$ est bijective d'inverse $F_{-s}$, lui aussi $C^\infty$ : $F_s$ est un difféomorphisme.

## Hypothèses

### H1 — Le flot est défini sur $\R\times\mathcal U$ tout entier (flot « complet »)

**Rôle.** Elle permet de parler de $F_s$ pour **tout** $s\in\R$, comme application de $\mathcal U$ dans $\mathcal U$, et de la propriété de groupe sans restriction.

**Si on la retire.** Pour $V=\R$, $\mathcal U=\R$ et $X(x)=x^2$, la courbe intégrale issue de $x$ est $F(s,x)=\frac{x}{1-sx}$, qui explose en $s=1/x$ si $x>0$ : $F_s$ n'est défini sur tout $\mathcal U$ pour aucun $s\ne0$. On n'a alors qu'un flot **local**. Pour la forme infinitésimale de l'invariance et pour Noether, seules les petites valeurs de $s$ comptent ([[ch08-invariance-infinitesimale]]) : l'hypothèse est donc commode plutôt qu'indispensable pour la suite.

### H2 — $X$ autonome et de classe $C^\infty$

**Rôle.** L'autonomie donne la propriété de groupe ; la régularité donne $F$ de classe $C^\infty$, en particulier $C^2$, ce qui servira (lemme de Schwarz) dans [[ch08-invariance-infinitesimale]]. Pour un champ dépendant du temps, le flot dépend de deux temps et $F_{s_1}\circ F_{s_2}\ne F_{s_1+s_2}$ en général (voir [[ch07-composition-flot]]).

**Si on la retire.** *Sans régularité suffisante, pas de flot.* Si $X$ est seulement continu, les courbes intégrales peuvent ne pas être uniques : pour $X(x)=2\abs x^{1/2}$ sur $\R$, les courbes $x\equiv0$ et $x(s)=s^2$ ($s\ge0$) partent toutes deux de $0$ ([[ch07-peano-non-unicite]]), et $F_s(0)$ n'est pas défini. Si $X$ est seulement de classe $C^1$ (ou lipschitzien), $(F_s)$ existe encore, la propriété de groupe subsiste et chaque $F_s$ est un $C^1$-difféomorphisme d'inverse $F_{-s}$ : la classe $C^\infty$ ne sert qu'à disposer de $F$ de classe $C^2$ dans [[ch08-invariance-infinitesimale]] (hypothèse de confort). *Sans autonomie, pas de groupe.* Pour le champ $X(s,x)=s$ sur $\R$, la solution issue de $x$ au temps $0$ est $F_s(x)=x+\tfrac{s^2}2$, et $F_{s_1}\circ F_{s_2}(x)=x+\tfrac{s_1^2+s_2^2}2\ne x+\tfrac{(s_1+s_2)^2}2=F_{s_1+s_2}(x)$ dès que $s_1s_2\ne0$.

### H3 — L'invariance porte sur $(q,v)$ transportés **ensemble**

**Rôle.** La vitesse est transportée par $d(F_s)_q$ : si $\gamma$ est une courbe, $F_s\circ\gamma$ a pour vitesse $d(F_s)_{\gamma(t)}(\gamma'(t))$. L'invariance signifie donc exactement que $L(t,F_s\circ\gamma,(F_s\circ\gamma)')=L(t,\gamma,\gamma')$ pour toute courbe : $\hat L(F_s\circ\gamma)=\hat L(\gamma)$.

**Si on la retire.** Voir le premier piège : n'agir que sur $q$ donne une notion fausse.

## Exemples

* **Translations.** $X\equiv e$ (vecteur constant), $F_s(q)=q+se$, défini sur $\R\times V$ ; $d(F_s)_q=\mathrm{Id}$. L'invariance s'écrit $L(u,q+se,v)=L(u,q,v)$. Pour $L=\tfrac12\norm v^2-U(q)$ : invariance $\iff U(q+se)=U(q)$ pour tous $s,q$. Exemple : la pesanteur $U(q)=g\langle q,e_3\rangle$ dans $\R^3$ est invariante par les translations selon $e_1$ et $e_2$, pas selon $e_3$.
* **Rotations.** Dans $\R^3$, pour $e$ unitaire, $X(q)=e\wedge q$ (champ linéaire, $C^\infty$). Son flot est la rotation $R_{e,s}$ d'axe $e$ et d'angle $s$ : $F_s(q)=(\cos s)\,q+(\sin s)\,e\wedge q+(1-\cos s)\langle e,q\rangle e$. Vérification : $\frac{\partial}{\partial s}F_s(q)=-(\sin s)\,q+(\cos s)\,e\wedge q+(\sin s)\langle e,q\rangle e$, et $e\wedge F_s(q)=(\cos s)\,e\wedge q+(\sin s)\,e\wedge(e\wedge q)=(\cos s)\,e\wedge q+(\sin s)\big(\langle e,q\rangle e-q\big)$ : c'est la même chose. Ici $d(F_s)_q=R_{e,s}$ (linéaire) conserve la norme, donc $L=\tfrac12\norm v^2-U(q)$ est invariant $\iff U(R_{e,s}q)=U(q)$ pour tout $s$. C'est le cas du potentiel de Kepler $U(q)=-\frac1{\norm q}$ sur $\mathcal U=\R^3\setminus\{0\}$ (que les rotations préservent) : voir [[ch08-moment-cinetique]].
* **Dilatations.** $\mathcal U=V\setminus\{0\}$, $X(q)=q$, $F_s(q)=e^sq$, $d(F_s)_q=e^s\,\mathrm{Id}$. Le Lagrangien $L(u,q,v)=\frac{\norm v^2}{\norm q^2}$ est invariant : $\frac{\norm{e^sv}^2}{\norm{e^sq}^2}=\frac{\norm v^2}{\norm q^2}$. En revanche $\tfrac12\norm v^2-U(q)$ ne l'est jamais : le terme cinétique est multiplié par $e^{2s}$.

## Pièges

* > ⚠️ **Transporter aussi la vitesse.** Dans $\R^2$ avec les rotations $R_s$ ($X(x,y)=(-y,x)$), le Lagrangien $L(u,q,v)=v_1$ (première coordonnée de $v$) vérifie $L(u,R_sq,v)=L(u,q,v)$, mais $L(u,R_sq,R_sv)=v_1\cos s-v_2\sin s\ne v_1$ : il n'est **pas** invariant au sens du poly. Et la conclusion de Noether est fausse pour lui : toute courbe vérifie (E.L) ($\frac{\partial L}{\partial v}=e_1$ constant, $\frac{\partial L}{\partial q}=0$), tandis que $Q=\frac{\partial L}{\partial v}\cdot X(\gamma)=-\gamma_2$ n'est pas constant pour $\gamma(t)=(0,t)$.
* L'invariance doit valoir pour tout $s$ ; mais grâce à la propriété de groupe il suffit qu'elle vaille pour $\abs s<\eta$ : si $L$ est invariant par $F_a$ et $F_b$, il l'est par $F_a\circ F_b=F_{a+b}$ (car $d(F_a\circ F_b)_q=d(F_a)_{F_b(q)}\circ d(F_b)_q$) et par $F_{-a}=F_a^{-1}$ ; et tout $s$ s'écrit $n\cdot\frac sn$ avec $\abs{s/n}<\eta$.
* Le paramètre $s$ du groupe n'a rien à voir avec le temps $t$ de la courbe ni avec la variable $u$ de $L$ : le flot agit sur les positions (et les vitesses), pas sur le temps. L'invariance par translation du temps (Lagrangien autonome) est traitée à part ([[ch08-energie-conservee]]).
* Ne pas confondre $\frac{\partial F}{\partial s}(s,x)=X(F(s,x))$ (vitesse **au point d'arrivée**) avec $X(x)$ ; les deux coïncident en $s=0$.
